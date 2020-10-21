const addPinToBoardForm = () => {
  const domString = `
        <div class="pin-form-btn-container">
          <button class="btn add-pin-to-board-btn mt-3" type="button" data-toggle="collapse" data-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
            Add Pin to Board
          </button>
        </div>
        <div class="collapse" id="collapseForm">
          <div class="mt-3" id="collapse-pin-form-container">
            <h2>Add a Pin</h2>
            <div id="success-message"></div>
            <div id="error-message"></div>
            <div class="form-group row">
              <label for="pinImageUrl">Image</label>
              <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
            </div>
            <button id="add-pin-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Add Pin to Board</button>
          </div>
        </div>`;
  return domString;
  // $('#add-pin-to-board-form').html(
  //   `<h2>Add a Pin</h2>
  //   <div id="success-message"></div>
  //     <div id="error-message"></div>
  //     <div class="form-group row">
  //       <label for="pinImageUrl">Image</label>
  //       <input type="text" class="form-control" id="pin-image-url" placeholder="Place Image URL">
  //     </div>
  //     <div class="form-group row">
  //           <label for="board">Board</label>
  //             <select class="form-control" id="board">
  //               <option value="">Select a Board</option>
  //             </select>
  //         </div>
  //     <button id="add-pin-btn" type="submit" class="btn form-btn"><i class="fas fa-plus-circle"></i> Add Pin</button>`
  // );
};

// const pinFormDropdown = () => {
//   let pinFormIsNotShown = true;
//   $('.add-pin-to-board-btn').on('click', (e) => {
//     console.warn('clicked');
//     e.preventDefault();
//     if (pinFormIsNotShown) {
//       $('#add-pin-to-board-form').html('<div>Hello</div>');
//       pinFormIsNotShown = false;
//     } else {
//       $('#add-pin-to-board-form').html('');
//       pinFormIsNotShown = true;
//     }
//   });
// };

export default { addPinToBoardForm };
