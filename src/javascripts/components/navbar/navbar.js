import firebase from 'firebase/app';
import 'firebase/auth';

const logoutEvent = () => {
  $('#navbar-logout-button').on('click', (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem('ua');
    firebase.auth().signOut();
    window.location.href = '/';
  });
};

const buildNavbar = (currentUser) => {
  $('#nav').html(
    `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand nav-text" href="#">zenterest</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" 
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active nav-text" id="user-boards">
          <a id="user-boards" class="nav-link" href="#">Boards<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" id="board-form">
          <a id="board-form" class="nav-link nav-text" href="#">Add Board<span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item" id="pin-form">
          <a id="pin-form" class="nav-link nav-text" href="#">Add Pin<span class="sr-only">(current)</span></a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <li class="nav-user-name nav-text">
          Welcome, ${currentUser.name}!
        </li>
        <button class="nav-link btn btn-danger p-2" id="navbar-logout-button">Logout</button>
      </form>
    </div>
  </nav>`
  );

  logoutEvent();
};

export default { buildNavbar };
