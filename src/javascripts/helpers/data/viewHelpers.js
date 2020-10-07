import addBoardView from '../../components/views/addBoard';
import addPinView from '../../components/views/addPin';
import userBoards from '../../components/views/userBoards';

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
    userBoards.userBoardsView();
  });
};

export default { viewListener };
