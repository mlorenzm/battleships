import Ship from "./Ship.js";
export default class GameBoard {
  constructor() {
    this.board = this.createBoard();
    this.ships = this.createShipFleet();
  }
  createBoard() {
    let array = [];
    let arrayItem = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        arrayItem.push({ shipName: undefined, shipIndex: undefined });
      }
      array.push(arrayItem);
      arrayItem = [];
    }
    return array;
  }
  getBoard() {
    return this.board;
  }
  createShipFleet() {
    const ships = [];
    const sizes = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
    for (let i = 0; i < sizes.length; i++) {
      const ship = new Ship(sizes[i]);
      ships.push(ship);
    }
    return ships;
  }
  placeShip(x, y, ship) {
    // x,y is the coordinate for the head of the ship. It places all ships vertically
    if (this.placementIsLegal(x, y, ship.getLength())) {
      for (let i = 0; i < ship.getLength(); i++) {
        this.board[x][y + i].shipIndex = i;
        this.board[x][y + i].shipName = ship;
      }
    }
  }
  placementIsLegal(x, y, len) {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + len > 10) {
      return false;
    } else {
      for (let i = y; i < y + len; i++) {
        if (this.board[i][x].shipName != undefined) {
          return false;
        }
      }
      return true;
    }
  }
  receiveAttack(x, y) {}
}
