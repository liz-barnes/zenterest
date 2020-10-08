import boardForm from '../forms/addBoardForm';

const addBoardView = () => {
  $('#app').html('<div id="add-board-form" class="form">Add Board Form</div>');
  boardForm.addBoardForm();
};

export default { addBoardView };
