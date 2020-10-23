import pinData from '../../helpers/data/pinData';
import card from '../cards/pinCards';
// import pinBtn from './addPinToBoard';
import pinToBoard from '../forms/addPinToBoardForm';

const singleBoardView = (boardId) => {
  $('#app').html(`
        <div class="add-pin-form-btn"></div>
        <div id="add-pin-to-board-form"></div>
        <div id="no-pins-mssg"></div>
        <div id="single-board-view" class="card-container-page"></div>`);
  $('.add-pin-form-btn').html(pinToBoard.addPinToBoardForm(boardId));

  pinData.getBoardPins(boardId).then((response) => {
    if (response.length) {
      response.forEach((pinObject) => {
        $('#single-board-view').append(card.buildPinCard(pinObject));
      });
    } else {
      $('#no-pins-mssg').html('<h1 class="no-pins mt-5 no-content-text">There aren’t any pins on this board yet, click ’Add Pin to Board’ to create some!</h1>');
    }
  });
};

export default { singleBoardView };
