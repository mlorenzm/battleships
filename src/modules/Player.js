import GameBoard from "./GameBoard";
import Ship from "./Ship";
export default class Player {
  constructor() {
    this.turn = true;
    this.board = new GameBoard();
    this.name = "player";
  }
  getTurn() {
    return this.turn;
  }
  toggleTurn() {
    if (this.turn == false) {
      this.turn = true;
    } else {
      this.turn = false;
    }
  }
  getBoard() {
    return this.board;
  }
  attackEnemyBoard(x, y, enemyPlayer) {
    if (this.getTurn()) {
      enemyPlayer.board.receiveAttack(x, y);
    }
    this.toggleTurn();
    enemyPlayer.toggleTurn();
  }
  placeRandomFleet() {
    const fleet = this.board.createShipFleet();
    for (let i = 0; i < fleet.length; i++) {
      var s = fleet[i];
      let x = Math.floor(Math.random() * 10);
      let y = Math.floor(Math.random() * 10);
      while (!this.board.placementIsLegal(x, y, s.getLength())) {
        x = Math.floor(Math.random() * 10);
        y = Math.floor(Math.random() * 10);
      }
      this.board.placeShip(x, y, s);
    }
  }
}
