import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCards';

const userBoardsView = (user) => {
  $('#app').html('<div id="user-boards-container" class="card-container-page"></div>');
  boardData.getUserBoards(user).then((response) => {
    if (response.length) {
      response.forEach((boardObject) => {
        $('#user-boards-container').append(card.buildBoardCard(boardObject));
      });
    } else {
      $('#app').html('<h1 class="no-boards no-content-text">You don’t have nay boards yet, click ’Add Board’ to create some!</h1>');
    }
  });
};

export default { userBoardsView };
