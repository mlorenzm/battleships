import GameBoard from "../GameBoard.js";
import Ship from "../Ship.js";

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

test("there is an array of ships created", () => {
  const gameboard = new GameBoard();
  const ships = [];
  const sizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  for (let i = 0; i < sizes.length; i++) {
    ships.push(new Ship(sizes[i]));
  }
  expect(gameboard.createShipFleet()).toStrictEqual(ships);
});
