import boardData from '../../helpers/data/boardData';

const buildBoardCard = (boardObject) => {
  const domString = `<div class="board-container card-container" id="${boardObject.firebaseKey}">
                      <div class="project-card card" id="${boardObject.firebaseKey}" style="width: 100%; background-image: url(${boardObject.imageUrl});">
                        <div class="board-btn-container card-btn-container">
                          <button class="btn btn-danger delete-board-btn delete-btn" id="${boardObject.firebaseKey}">Delete Board</button>
                        </div>
                      </div>
                      <div class="card-id">
                        <h5 class="board-id">${boardObject.name}</h5>
                      </div>
                    </div>`;
  $('body').on('click', '.delete-board-btn', (e) => {
    e.stopImmediatePropagation();
    console.warn('board btn clicked', e);
    // $(`.project-card#${e.currentTarget.id}`).remove();
    boardData.deleteBoardAndPins(e.currentTarget.id);
  });
  return domString;
};

export default { buildBoardCard };
