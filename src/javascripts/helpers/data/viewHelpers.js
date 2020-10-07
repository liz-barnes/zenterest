import addBoardView from '../../components/views/addBoard';

const viewListener = () => {
  $('body').on('click', '#add-board-form-link', (e) => {
    console.warn('add board clicked', e);
    addBoardView.addBoardView();
  });
  console.warn('working');
};

export default { viewListener };
