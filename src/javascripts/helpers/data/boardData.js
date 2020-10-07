import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const addBoard = (data) => axios
  .post(`${baseUrl}/projects.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/projects/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

export default { addBoard };
