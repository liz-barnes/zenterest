import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import homeView from '../../components/views/homeView';
import userBoardsView from '../../components/views/userBoards';
import viewHelper from './viewHelpers';

import auth from '../../components/auth/auth';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      homeView.loginView(currentUser);
      userBoardsView.userBoardsView(user.uid);
      viewHelper.viewListener(user.uid);
    } else {
      auth.loginButton();
      homeView.logoutView();
    }
  });
};

export default { checkLoginStatus };
