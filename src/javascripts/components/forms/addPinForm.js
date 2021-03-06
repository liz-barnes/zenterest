import pinData from '../../helpers/data/pinData';
import boardData from '../../helpers/data/boardData';

const addPinForm = (userUid) => {
  $('#add-pin-form').html(
    `<h2>Add a Pin</h2>
    <div id="success-message"></div>
      <div id="error-message"></div>
      <div class="form-group row">
        <label for="pinImageUrl">Image</label>
        <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
      </div>
      <div class="form-group row">
            <label for="board">Board</label>
              <select class="form-control" id="board">
                <option value="">Select a Board</option>
              </select>
          </div>
      <button id="add-pin-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Add Pin</button>`
  );

  boardData.getUserBoards(userUid).then((response) => {
    response.forEach((board) => {
      $('select').append(`<option value=${board.firebaseKey}>${board.name}</option>`);
    });
  });

  $('#add-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      pinUrl: $('#pin-image-url').val() || false,
      boardFirebaseKey: $('#board').val() || false,

    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');

      pinData.addPin(data)
        .then(() => {
          console.warn(data);
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your pin was added!
          </div>`
          );
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));

      $('#pin-image-url').val('');
      $('#board').val('');
    }
  });
};

export default { addPinForm };
