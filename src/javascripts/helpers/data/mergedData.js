import userData from './userData';
import boardData from './boardData';

const getDataForBoardsView = () => new Promise((resolve, reject) => {
  boardData.getAllBoards().then((boardResponse) => {
    console.warn('board response', boardResponse);
    userData.getAllUsers().then((userResponse) => {
      console.warn('userresponse', userResponse);
      const boards = [];
      console.warn('boards array', boards);
      boardResponse.forEach((board) => {
        const userObject = userResponse.find((user) => user.uid === board.userUid);
        console.warn('userobject', userObject);
        const userUse = {
          userName: userObject.name,
          userEmail: userObject.email
        };
        boards.push({ ...board, ...userUse });
        resolve(boards);
        console.warn('user boards resolve', boards);
      });
    });
  }).catch((error) => reject(error));
});

export default { getDataForBoardsView };
