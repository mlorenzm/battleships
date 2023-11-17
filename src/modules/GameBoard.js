import Ship from "./Ship.js";
export default class GameBoard {
  constructor() {
    this.board = this.createBoard();
  }
  createBoard() {
    let arr = [];
    let size = 10;
    for (let i = 0; i < size; i++) {
      arr[i] = [];
      for (let j = 0; j < size; j++) {
        arr[i][j] = null;
      }
    }
    return arr;
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
  placeShip(x, y) {
    // x,y is the coordinate for the head of the ship. It places all ships vertically

    const ship = new Ship(size);
  }
  placementIsLegal(x, y) {
    if (0 <= x <= 10 && 0 <= y <= 10) {
      return true;
    }
  }
}
