import GameBoard from "../GameBoard";
import Ship from "../Ship";
export default class Player {
  constructor() {
    this.turn = true;
    this.board = GameBoard.board;
  }
  getTurn() {
    return this.turn;
  }
  setTurn() {
    if (!this.turn) {
      this.turn = true;
    }
  }
}
