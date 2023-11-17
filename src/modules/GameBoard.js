import Ship from Ship.js
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
  placeShip(){

  }
  placementIsLegal(x,y){
    if (0<=x<=10) && (0<=y<=10){
      return true
    }
  }
}
