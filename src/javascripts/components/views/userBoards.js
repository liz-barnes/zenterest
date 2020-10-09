import boardData from '../../helpers/data/boardData';
import card from '../cards/boardCards';

const userBoardsView = (user) => {
  $('#app').html('<div id="user-boards-container"></div>');
  boardData.getUserBoards(user).then((response) => {
    if (response.length) {
      response.forEach((boardObject) => {
        $('#user-boards-container').append(card.buildBoardCard(boardObject));
      });
    } else {
      $('#app').html('<h1 class="no-boards">NO BOARDS</h1>');
    }
  });
};

export default { userBoardsView };
