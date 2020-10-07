import firebase from 'firebase/app';
import 'firebase/auth';
import userData from './userData';
import homeView from '../../components/views/homeView';

import auth from '../../components/auth/auth';
// import userBoards from '../../components/views/userBoards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const currentUser = userData.setCurrentUser(user);
      homeView.loginView(currentUser);
    } else {
      auth.loginButton();
      homeView.logoutView();
    }
  });
};

export default { checkLoginStatus };
