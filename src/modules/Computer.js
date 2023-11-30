import Player from "./Player";
export default class Computer extends Player {
  constructor() {
    super();
    this.attacks = [];
    this.turn = false;
    this.name = "computer";
  }
  randomAttack(enemyPlayer) {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const array = [x, y];
    if (JSON.stringify(this.attacks).includes(JSON.stringify(array))) {
      this.randomAttack(enemyPlayer);
    } else {
      this.attackEnemyBoard(x, y, enemyPlayer);
    }
  }
}
