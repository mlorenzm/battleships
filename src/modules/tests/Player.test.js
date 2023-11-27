import Player from "../Player.js";
import Computer from "../Computer.js";
import Ship from "../Ship.js";
test("player and computer have an own, same gameboard", () => {
  const player = new Player();
  const computer = new Computer();
  expect(player.getBoard()).toStrictEqual(computer.getBoard());
});

test("player can attack", () => {
  const player = new Player();
  const computer = new Computer();
  const ship = new Ship(1);
  computer.board.placeShip(0, 0, ship);
  player.attackEnemyBoard(0, 0, computer);
  expect(computer.board.getBoard()[0][0].shipName).toStrictEqual(ship);
});

test("turn is passed", () => {
  const player = new Player();
  const computer = new Computer();
  const ship = new Ship(1);
  computer.board.placeShip(0, 0, ship);
  player.attackEnemyBoard(0, 0, computer);
  expect(player.getTurn()).toBe(false);
});
test("turn is passed II", () => {
  const player = new Player();
  const computer = new Computer();
  const ship = new Ship(1);
  computer.board.placeShip(0, 0, ship);
  player.attackEnemyBoard(0, 0, computer);
  expect(computer.getTurn()).toBe(true);
});
