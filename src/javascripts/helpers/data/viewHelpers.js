import addBoardView from '../../components/views/addBoard';
import addPinView from '../../components/views/addPin';
import userBoards from '../../components/views/userBoards';
import singleBoardView from '../../components/views/singleBoard';
import pinData from './pinData';
import editPinView from '../../components/views/editPin';
// import userData from './userData';

const viewListener = () => {
  $('body').on('click', '#add-board-form-link', (e) => {
    console.warn('add board clicked', e);
    addBoardView.addBoardView();
  });

  $('body').on('click', '#add-pin-form-link', (e) => {
    console.warn('add pin clicked', e);
    addPinView.addPinView();
  });

  $('body').on('click', '#user-boards-link', (e) => {
    console.warn('show boards clicked', e);
    userBoards.userBoardsView('Y874tA9mEYYqTCwaonHP5uIwFFB2');
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

  $('body').on('click', '#edit-pin', (e) => {
    e.stopImmediatePropagation();
    const firebaseKey = e.currentTarget.id;
    console.warn('clicked bitch', firebaseKey);
    editPinView.editPinView(firebaseKey);
  });
};

export default { viewListener };
