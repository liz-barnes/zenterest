import mergedData from '../../helpers/data/mergedData';
import card from '../cards/boardCards';

const userBoardsView = () => {
  mergedData.getDataForBoardsView()
    .then((response) => {
      console.warn('user boards view response', response);
      if (response.length) {
        response.forEach((item) => {
          $('#app').append(card.buildBoardCard(item));
        });
      } else {
        $('#app').append('<h2>NO BOARDS</h2>');
      }
    });
};

export default { userBoardsView };
