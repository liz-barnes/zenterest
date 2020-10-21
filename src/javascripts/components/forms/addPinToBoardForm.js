const addPinToBoardForm = (boardId) => {
  const domString = `
        <div class="pin-form-btn-container">
          <button class="btn add-pin-to-board-btn mt-3" type="button" data-toggle="collapse" data-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
            Add Pin to Board
          </button>
        </div>
        <div class="collapse" id="collapseForm">
          <div id="collapse-pin-form-container">
            <h2>Add a Pin</h2>
            <div id="success-message"></div>
            <div id="error-message"></div>
            <div class="form-group row">
              <label for="pinImageUrl">Image</label>
              <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
            </div>
            <button id="add-pin-to-board-form-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Add Pin to Board</button>
          </div>
        </div>`;

  $('body').on('click', '#add-pin-to-board-form-btn', () => {
    console.warn('clicked');
    console.warn('pin board id', boardId);
  });

  return domString;
};

export default { addPinToBoardForm };
