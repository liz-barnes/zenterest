import form from '../forms/editPinForm';
import pinData from '../../helpers/data/pinData';

const editPinView = (pinFirebaseKey, userId) => {
  $('#app').html('<div id="edit-pin-form"></div>');
  pinData.getSinglePin(pinFirebaseKey).then((response) => {
    console.warn('single pin', response);
    form.editPinForm(response, userId);
  });
};

export default { editPinView };
