import addBoardView from '../../components/views/addBoard';
import addPinView from '../../components/views/addPin';
import userBoards from '../../components/views/userBoards';
import singleBoardView from '../../components/views/singleBoard';
import pinData from './pinData';
// import boardData from './boardData';
import editPinView from '../../components/views/editPin';
// import userData from './userData';

// const viewHelper = (id, user) => {
//   switch (id) {
//     case 'user-boards':
//       return boardData.getUserBoards(user);
//     case 'board-form':
//       return addBoardView.addBoardView();
//     case 'pin-form':
//       return addPinView.addPinView();
//     default:
//       return console.warn('nothing clicked');
//   }
// };
const viewListener = (user) => {
  // viewHelper();

  // $('body').on('click', 'li.nav-item', (e) => {
  //   viewHelper(e.currentTarget.id, user);
  // });

  $('body').on('click', '#board-form', (e) => {
    console.warn('add board clicked', e);
    addBoardView.addBoardView();
  });

  $('body').on('click', '#pin-form', (e) => {
    console.warn('add pin clicked', e);
    addPinView.addPinView(user);
  });

  $('body').on('click', '#user-boards', (e) => {
    console.warn('show boards clicked', e);
    userBoards.userBoardsView(user);
  });

  $('body').on('click', '.project-card', (e) => {
    console.warn('board clicked', e);
    const boardId = e.currentTarget.id;
    console.warn('boardID', boardId);
    singleBoardView.singleBoardView(boardId);
  });

  $('body').on('click', '.delete-pin-btn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    console.warn('object clicked', firebaseKey);
    $(`.pin-card#${firebaseKey}`).remove();
    pinData.removePin(firebaseKey);
  });

  $('body').on('click', '.edit-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    console.warn('clicked bitch', firebaseKey);
    editPinView.editPinView(firebaseKey, user);
  });
};

export default { viewListener };
