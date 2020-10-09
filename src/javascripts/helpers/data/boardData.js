import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinData from './pinData';

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

const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/projects.json?orderBy="firebaseKey"&equalTo="${boardId}"`)
    .then((response) => {
      const board = Object.values(response.data);
      const thisBoard = board[0];
      resolve(thisBoard);
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

const deleteBoardAndPins = (boardId) => {
  pinData.getBoardPins(boardId).then((response) => {
    response.forEach((pin) => {
      pinData.removePin(pin.firebaseKey);
    });
  }).then(() => {
    axios.delete(`${baseUrl}/projects/${boardId}.json`);
    $(`.board-container#${boardId}`).remove();
  });
};

export default {
  addBoard,
  getAllBoards,
  getUserBoards,
  getSingleBoard,
  deleteBoardAndPins
};
