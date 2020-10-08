import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json`)
    .then((response) => {
      const allBoards = response.data;
      const boards = [];
      if (allBoards) {
        Object.keys(allBoards).forEach((boardId) => {
          boards.push(allBoards[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

const getUserBoards = (userUid) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json?orderBy="userUid"&equalTo="${userUid}"`)
    .then((response) => {
      const boards = response.data;

      const boardsArray = [];
      if (boards) {
        Object.keys(boards).forEach((boardId) => {
          boardsArray.push(boards[boardId]);
        });
      }
      resolve(boardsArray);
    })
    .catch((error) => reject(error));
});

const addBoard = (data) => axios
  .post(`${baseUrl}/projects.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/projects/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default { addBoard, getAllBoards, getUserBoards };
