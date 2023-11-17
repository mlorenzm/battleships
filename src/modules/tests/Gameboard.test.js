import GameBoard from "../GameBoard.js";

test("the gameboard.board is a 2d array of size 10 null", () => {
  const gameboard = new GameBoard();
  let arr = [];
  let size = 10;
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = null;
    }
  }
  expect(gameboard.board).toStrictEqual(arr);
});

test("the gameboard.board is a 2d array of size 10 null", () => {
  const gameboard = new GameBoard();
  let arr = [];
  let size = 10;
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = null;
    }
  }
  expect(gameboard.board).toStrictEqual(arr);
});
