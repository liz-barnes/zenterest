import addBoardView from '../../components/views/addBoard';
import addPinView from '../../components/views/addPin';
import userBoards from '../../components/views/userBoards';
import singleBoardView from '../../components/views/singleBoard';
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
    // userBoards.userBoardsView('Y874tA9mEYYqTCwaonHP5uIwFFB2');
  });
};

export default { viewListener };
