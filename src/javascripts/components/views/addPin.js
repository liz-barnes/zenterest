import pinForm from '../forms/addPinForm';

const addPinView = (userUid) => {
  $('#app').html('<div id="add-pin-form" class="form">Add Pin Form</div>');
  pinForm.addPinForm(userUid);
};

export default { addPinView };
