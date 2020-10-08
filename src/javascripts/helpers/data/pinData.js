import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addPin = (data) => axios
  .post(`${baseUrl}/pins.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const getBoardPins = (boardId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/pins.json?orderBy="boardFirebaseKey"&equalTo="${boardId}"`)
    .then((response) => {
      const pins = response.data;

      const boardPins = [];
      if (pins) {
        Object.keys(pins).forEach((pinId) => {
          boardPins.push(pins[pinId]);
        });
      }
      resolve(boardPins);
    })
    .catch((error) => reject(error));
});

export default { addPin, getBoardPins };
