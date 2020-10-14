import firebase from 'firebase/app';
import 'firebase/auth';
import boardData from '../../helpers/data/boardData';
// import userData from '../../helpers/data/userData';

const addBoardForm = () => {
  $('#add-board-form').html(
    `<h2>Add a Board</h2>
    <div id="success-message"></div>
    <form>
      <div id="error-message"></div>
      <div class="form-group row">
        <label for="name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Example: Yoga Poses">
      </div>
      <div class="form-group row">
        <label for="imageUrl">Image</label>
        <input type="text" class="form-control" id="board-image-url" placeholder="Place Image URL">
      </div>
      <button id="add-board-btn" type="submit" class="btn btn-info form-btn"><i class="fas fa-plus-circle"></i> Add Board</button>`
  );
  const user = firebase.auth().currentUser;

  // userData.getAllUsers().then((response) => {
  //   response.forEach((item) => {
  //     $('select').append(`<option value="${item.uid}">${item.name}</option>`);
  //   });
  // });

  $('#add-board-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      name: $('#name').val() || false,
      imageUrl: $('#board-image-url').val() || false,
      userUid: user.uid || false,
    };
    console.warn('user data', data);

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        `<div class="alert alert-danger" role="alert">
        Please complete all fields
      </div>`
      );
    } else {
      $('#error-message').html('');

      boardData.addBoard(data)
        .then(() => {
          $('#success-message').html(
            `<div class="alert alert-success" role="alert">
            Right on! Your board was added!
          </div>`
          );
        }).catch((error) => console.warn(error));

      setTimeout(() => {
        $('#success-message').html('');
      }, 3000);

      $('#name').val('');
      $('#board-image-url').val('');
      $('#user').val('');
    }
  });
};

export default { addBoardForm };
