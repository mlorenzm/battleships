import GameBoard from "../GameBoard";
import Ship from "../Ship";
export default class Player {
  constructor() {
    this.turn = true;
    this.board = new GameBoard();
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
}
