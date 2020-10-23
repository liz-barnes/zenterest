import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

// const addPin = (data) => axios
//   .post(`${baseUrl}/pins.json`, data)
//   .then((response) => {
//     const update = { firebaseKey: response.data.name };
//     console.warn('pin update', update);
//     axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update);
//   })
//   .catch((error) => console.warn(error));

const addPin = (data) => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/pins.json`, data)
    .then((response) => {
      console.warn('post response', response);
      console.warn('post response data', response.data.name);
      const update = { firebaseKey: response.data.name };
      console.warn('pin update', update);
      axios.patch(`${baseUrl}/pins/${response.data.name}.json`, update)
        .then((patchResponse) => {
          console.warn('patch status', patchResponse.status);
          console.warn('patch response', patchResponse.data);
          resolve(response.data.name);
        });
    })
    .catch((error) => reject(error));
});

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

const getSinglePin = (pinFirebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins/${pinFirebaseKey}.json`)
    .then((response) => {
      const thisPin = response.data;
      resolve(thisPin);
    }).catch((error) => reject(error));
});

const updatePin = (firebaseKey, pinObject) => axios.patch(`${baseUrl}/pins/${firebaseKey}.json`, pinObject);

const removePin = (firebaseKey) => axios.delete(`${baseUrl}/pins/${firebaseKey}.json`);

export default {
  addPin,
  getBoardPins,
  removePin,
  updatePin,
  getSinglePin
};
