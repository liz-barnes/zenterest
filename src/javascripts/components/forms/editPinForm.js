import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const editPinForm = (pinObject, userUid) => {
  $('#edit-pin-form').html(`
        <div class="form" id="edit-pin-form-container">
            <h2>Edit Pin</h2>
            <div id="success-message"></div>
            <div>
                <div id="error-message"></div>
                <div class="form-group row">
                    <label for="board">Board</label>
                    <select class="form-control" id="board">
                        <option value="">Select a Board</option>
                    </select>
                </div>
                <button id="update-pin-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Update Pin</button>
            </div>
        </div>
    `);

  boardData.getUserBoards(userUid).then((response) => {
    response.forEach((board) => {
      $('select').append(`<option value=${board.firebaseKey}>${board.name}</option>`);
    });
  });

  $('#update-pin-btn').on('click', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();

    const data = {
      boardFirebaseKey: $('#board').val() || false,
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please select a board!
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
          setTimeout(() => {
            $('#success-message').html('');
          }, 3000);
        }).catch((error) => console.warn(error));
    }
  });
};

export default { editPinForm };
