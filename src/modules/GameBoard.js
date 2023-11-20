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
    const len = ship.length;
    // x,y is the coordinate for the head of the ship. It places all ships vertically
    if (this.placementIsLegal(x, y, len)) {
      for (let i = 0; i < len; i++) {
        this.gameBoardArray[y + i][x].shipName = ship;
        this.gameBoardArray[y + i][x].shipIndex = i;
      }
    }
  }
  placementIsLegal(x, y, len) {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + len > 10) {
      return false;
    } else {
      for (let i = y; i < y + len; i++) {
        if (this.gameBoardArray[i][x].shipName != undefined) {
          return false;
        }
      }
      return true;
    }
  }
  receiveAttack(x, y) {}
}
