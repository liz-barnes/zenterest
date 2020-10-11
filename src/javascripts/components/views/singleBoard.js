import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';

const singleBoardView = (boardId) => {
  $('#app').html('<div id="single-board-view" class="card-container-page"></div>');
  pinData.getBoardPins(boardId).then((response) => {
    if (response.length) {
      response.forEach((pinObject) => {
        $('#single-board-view').append(card.buildPinCard(pinObject));
      });
    } else {
      $('#app').html('<h1 class="no-pins mt-5 no-content-text">There aren’t any pins on this board yet, click ’Add Pin’ to create some!</h1>');
    }
  });
};

export default { singleBoardView };
