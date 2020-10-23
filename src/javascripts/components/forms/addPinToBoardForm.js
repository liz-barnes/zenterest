import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';
// import printPins from '../views/singleBoard';

const addPinToBoardForm = (boardId) => {
  const domString = `
        <div class="pin-form-btn-container">
          <button class="btn add-pin-to-board-btn mt-3" type="button" data-toggle="collapse" data-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
            Add Pin to Board
          </button>
        </div>
        <div class="collapse" id="collapseForm">
          <div id="collapse-pin-form-container">
            <h2>Add a Pin</h2>
            <div id="success-message"></div>
            <div id="error-message"></div>
            <div class="form-group row">
              <label for="pinImageUrl">Image</label>
              <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
            </div>
            <button id="add-pin-to-board-form-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Add Pin to Board</button>
          </div>
        </div>`;

  $('body').on('click', '#add-pin-to-board-form-btn', (e) => {
    e.stopImmediatePropagation();
    const data = {
      pinUrl: $('#pin-image-url').val() || false,
      boardFirebaseKey: boardId,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please input pin image URL
      </div>`
      );
    } else {
      $('#error-message').html('');
      $('.no-content-text').remove();

      pinData.addPin(data)
        .then((response) => {
          console.warn('pin data', data);
          console.warn('response', response);
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your pin was added!
          </div>`
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
          pinData.getBoardPins(boardId).then((pinResponse) => {
            console.warn('board pins', pinResponse);
            if (pinResponse.length) {
              $('#single-board-view').html('');
              pinResponse.forEach((pinObject) => {
                $('#single-board-view').append(card.buildPinCard(pinObject));
              });
            } else {
              $('#no-pins-mssg').html('<h1 class="no-pins mt-5 no-content-text">There aren’t any pins on this board yet, click ’Add Pin to Board’ to create some!</h1>');
            }
          });
          // if (response.status === 200) {
          //   setTimeout(() => {
          //     $('#single-board-view').append(card.buildPinCard(response.data));
          //   }, 3000);
          // } else {
          //   console.warn('failed, come back later');
          // }
          // $('.collapse-pin-form-container').html('');
          // setTimeout(() => {
          //   printPins.printBoardPins(boardId);
          // }, 3000);
        }).catch((error) => console.warn(error));

      $('#pin-image-url').val('');
    }
  });

  return domString;
};

export default { addPinToBoardForm };
