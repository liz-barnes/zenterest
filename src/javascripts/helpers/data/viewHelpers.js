import addBoardView from '../../components/views/addBoard';
import addPinView from '../../components/views/addPin';
import userBoards from '../../components/views/userBoards';
import singleBoardView from '../../components/views/singleBoard';
import pinData from './pinData';
import editPinView from '../../components/views/editPin';

const viewListener = (user) => {
  $('body').on('click', '#board-form', () => {
    addBoardView.addBoardView();
  });

  $('body').on('click', '#pin-form', () => {
    addPinView.addPinView(user);
  });

  $('body').on('click', '#user-boards', () => {
    userBoards.userBoardsView(user);
  });

  $('body').on('click', '.project-card', (e) => {
    const boardId = e.currentTarget.id;
    singleBoardView.singleBoardView(boardId);
  });

  $('body').on('click', '.delete-pin-btn', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    $(`.pin-card#${firebaseKey}`).remove();
    pinData.removePin(firebaseKey);
  });

  $('body').on('click', '.edit-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    editPinView.editPinView(firebaseKey, user);
  });
};

export default { viewListener };
