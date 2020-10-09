import boardData from '../../helpers/data/boardData';

const buildBoardCard = (boardObject) => {
  const domString = `<div class="board-container" id="${boardObject.firebaseKey}">
                      <div class="project-card" id="${boardObject.firebaseKey}" style="width: 18rem; background-image: url(${boardObject.imageUrl});">
                        <div class="board-btn-container d-flex justify-content-center align-items-end">
                          <button class="btn btn-danger delete-board-btn" id="${boardObject.firebaseKey}">Delete Board</button>
                        </div>
                      </div>
                      <h5 class="board-id">${boardObject.name}</h5>
                    </div>`;
  $('body').on('click', '.delete-board-btn', (e) => {
    e.stopImmediatePropagation();
    boardData.deleteBoardAndPins(e.currentTarget.id);
  });
  return domString;
};

export default { buildBoardCard };
