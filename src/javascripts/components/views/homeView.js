import navbar from '../navbar/navbar';

const loginView = (currentUser) => {
  $('#app').html('');
  navbar.buildNavbar(currentUser);
};

const logoutView = () => {
  $('#nav').html(`
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">zenterest</span>
      </nav>
      `);
};

export default { logoutView, loginView };
