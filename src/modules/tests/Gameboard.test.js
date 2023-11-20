import GameBoard from "../GameBoard.js";
import Ship from "../Ship.js";

test("the gameboard.board is a 2d array of size 10 null", () => {
  const gameboard = new GameBoard();
  let array = [];
  let arrayItem = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      arrayItem.push({ shipName: undefined, shipIndex: undefined });
    }
    array.push(arrayItem);
    arrayItem = [];
  }
  expect(gameboard.getBoard()).toStrictEqual(array);
});

test("there is a fleet of ships created", () => {
  const gameboard = new GameBoard();
  const ships = [];
  const sizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
  for (let i = 0; i < sizes.length; i++) {
    ships.push(new Ship(sizes[i]));
  }
  expect(gameboard.createShipFleet()).toStrictEqual(ships);
});

test("there is a ship placed on pos 0,0", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board[0][0].shipName).toBe(ship);
});

test("there is a ship placed on pos 0,2 (length 3)", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board[0][2].shipName).toBe(ship);
});
test("there is no ship placed on pos 0,4", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  expect(gameboard.board[0][4].shipName).toBe(undefined);
});
test("there is a ship being hit on 0,0", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  gameboard.receiveAttack(0, 0);
  expect(gameboard.board[0][0].shipName.hits).toBe(1);
});
test("there is a ship being 2hitted on 0,0", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  gameboard.receiveAttack(0, 0);
  gameboard.receiveAttack(0, 1);
  expect(gameboard.board[0][0].shipName.hits).toBe(2);
});

test("missed shot on 1,1", () => {
  const gameboard = new GameBoard();
  const ship = new Ship(3);
  gameboard.placeShip(0, 0, ship);
  gameboard.receiveAttack(1, 1);

  expect(gameboard.missedShots).toStrictEqual([[1, 1]]);
});
