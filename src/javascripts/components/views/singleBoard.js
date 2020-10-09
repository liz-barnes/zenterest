import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';

const singleBoardView = (boardId) => {
  $('#app').html('<div id="single-board-view"></div>');
  pinData.getBoardPins(boardId).then((response) => {
    if (response.length) {
      response.forEach((pinObject) => {
        $('#single-board-view').append(card.buildPinCard(pinObject));
      });
    } else {
      $('#app').html('<h1 class="no-pins">NO PINS</h1>');
    }
  });
};

export default { singleBoardView };
