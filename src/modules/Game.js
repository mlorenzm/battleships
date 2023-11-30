import Player from "./Player";
import Computer from "./Computer";
import Ship from "./Ship";

export default class Game {
  constructor() {
    this.player = new Player();
    this.computer = new Computer();
  }

  populateGameboard = (character) => {
    // const fleet = character.board.createShipFleet();
    // let b = 0;
    // while (fleet.length > 0) {
    //   const ship = fleet.shift();
    //   let a = 0;
    //   character.board.placeShip(a, b, ship);
    //   b++;
    // }
    const ship = new Ship(2);
    const ship_3 = new Ship(3);

    character.board.placeShip(0, 0, ship);
    character.board.placeShip(3, 0, ship);
    character.board.placeShip(6, 2, ship);
    character.board.placeShip(3, 3, ship_3);
  };
  generateGrid = (x) => {
    const element = document.getElementById(`${x}-board`);
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell-element");
        cell.dataset.x = j;
        cell.dataset.y = i;
        cell.addEventListener("click", (e) => {
          this.attackEvent(e.target, x);
        });
        element.appendChild(cell);
      }
    }
  };
  renderGameBoard = (character) => {
    let element;
    if (Player.prototype.isPrototypeOf(character)) {
      element = document.getElementById("player-board");
    } else {
      element = document.getElementById("computer-board");
    }
    const gameBoard = character.board.board;
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard.length; j++) {
        if (gameBoard[i][j].shipName !== undefined) {
          var cellElement = element.querySelector(
            `[data-x="${i}"][data-y="${j}"]`
          );
          // Set the color for cells with a ship
          cellElement.classList.add("taken");
        }
      }
    }
  };
  attackEvent = (element, player) => {
    let x = element.getAttribute("data-x");
    let y = element.getAttribute("data-y");
    console.log(player);
  };
}
