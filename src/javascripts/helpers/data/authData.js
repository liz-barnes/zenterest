import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import homeView from '../../components/views/homeView';
import userBoardsView from '../../components/views/userBoards';

import auth from '../../components/auth/auth';
// import userBoards from '../../components/views/userBoards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      homeView.loginView(currentUser);
      userBoardsView.userBoardsView('Y874tA9mEYYqTCwaonHP5uIwFFB2');
    } else {
      auth.loginButton();
      homeView.logoutView();
    }
  });
};

export default { checkLoginStatus };
