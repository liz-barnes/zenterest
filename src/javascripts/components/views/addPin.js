import pinForm from '../forms/addPinForm';

const addPinView = () => {
  $('#app').html('<div id="add-pin-form" class="form">Add Pin Form</div>');
  pinForm.addPinForm();
};

export default { addPinView };
