import form from '../forms/editPinForm';
import pinData from '../../helpers/data/pinData';

const editPinView = (pinFirebaseKey) => {
  $('#app').html('<div id="edit-pin-form"></div>');
  pinData.getSinglePin(pinFirebaseKey).then((response) => {
    console.warn('response', response);
    form.editPinForm(response);
  });
};

export default { editPinView };
