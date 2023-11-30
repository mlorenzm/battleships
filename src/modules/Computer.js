import Player from "./Player";
export default class Computer extends Player {
  constructor() {
    super();
    this.attacks = [];
    this.turn = false;
    this.name = "computer";
  }
  randomAttack(enemyPlayer) {
    var a = Math.floor(Math.random() * 10);
    var b = Math.floor(Math.random() * 10);
    const array = [a, b];
    // if (this.inAttacks(array, this.attacks)) {
    //   this.randomAttack(enemyPlayer);
    // } else {
    this.attackEnemyBoard(a, b, enemyPlayer);
    // }
    this.attacks.push(array);
    console.log(a, b);
  }
  inAttacks(singleArray, bidimensionalArray) {
    if (this.attacks.length == 0) return;
    else {
      return bidimensionalArray.some(
        (subArray) =>
          subArray.length === singleArray.length &&
          subArray.every((value, index) => value === singleArray[index])
      );
    }
  }
}
