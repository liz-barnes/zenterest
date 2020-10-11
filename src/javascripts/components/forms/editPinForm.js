import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const editPinForm = (pinObject) => {
  $('#edit-pin-form').html(`
        <div class="form" id="edit-pin-form-container">
            <h2>Add this Pin to a Board</h2>
            <div id="success-message"></div>
            <div>
                <div id="error-message"></div>
                <div class="form-group">
                    <label for="board">Board</label>
                    <select class="form-control" id="board">
                        <option value="">Select a Board</option>
                    </select>
                </div>
                <button id="update-pin-btn" type="submit" class="btn btn-info form-btn"><i class="fas fa-plus-circle"></i> Update Pin</button>
            </div>
        </div>
    `);

  boardData.getAllBoards().then((response) => {
    response.forEach((board) => {
      console.warn('board response', response);
      // $('select').append(`<option value="${board.firebaseKey}" ${pinObject.boardFirebaseKey === board.firebaseKey ? "selected ='selected'" : ''}>${board.name}</option>`);
      $('select').append(`<option value=${board.firebaseKey}>${board.name}</option>`);
    });
  });

  $('#update-pin-btn').on('click', (e) => {
    e.preventDefault();
    console.warn('edit pin biatch');

    const data = {
      boardFirebaseKey: $('#board').val() || false,
    };
    console.warn('data', data);

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');

      pinData.updatePin(pinObject.firebaseKey, data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your pin was updated!
          </div>`
          );
        }).catch((error) => console.warn('pin object', pinObject.firebaseKey, error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);
    }
  });
};

export default { editPinForm };
