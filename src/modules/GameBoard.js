import Ship from "./Ship.js";
export default class GameBoard {
  constructor() {
    this.board = this.board = Array.from({ length: 10 }, () =>
      Array(10).fill(undefined)
    );
    this.ships = this.createShipFleet();
    this.missedShots = [];
  }

  getBoard() {
    return this.board;
  }
  getMissedShots() {
    return this.missedShots;
  }
  createShipFleet() {
    const ships = [];
    const sizes = [2, 2, 3, 3, 4, 5];
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
        this.board[x][y + i] = ship;
      }
    }
  }
  placementIsLegal(x, y, len) {
    if (x > 10 || x < 0 || y > 10 || y < 0 || y + len > 10) {
      return false;
    } else {
      for (let i = y; i < y + len; i++) {
        if (this.board[x][i] != undefined) {
          return false;
        }
      }
      return true;
    }
  }
  receiveAttack(x, y) {
    if (this.board[x][y] != undefined) {
      this.board[x][y].hit();
    } else this.missedShots.push([x, y]);
  }
  allShipsSunk() {
    let key = true;
    this.board.forEach((item) => {
      item.forEach((element) => {
        if (element) {
          if (element.isSunk() == false) {
            key = false;
          }
        }
      });
    });
    return key;
  }
}
