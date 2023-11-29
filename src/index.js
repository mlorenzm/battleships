import "./style.scss";

import Player from "./modules/Player";
import Computer from "./modules/Computer";

const generateGrid = (x) => {
  const element = document.getElementById(x);
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = j;
      cell.dataset.y = i;
      cell.addEventListener("click", () => {
        return [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
      });
      element.appendChild(cell);
    }
  }
};

// This is a helper function in development, please ignore
const populateGameboard = (character) => {
  const fleet = character.board.createShipFleet();
  let b = 0;
  while (fleet.length > 0) {
    const ship = fleet.shift();
    let a = 0;
    character.board.placeShip(a, b, ship);
    b++;
  }
};

const renderGameBoard = (character) => {
  let element;
  if (Player.prototype.isPrototypeOf(character)) {
    element = document.getElementById("player");
  } else {
    element = document.getElementById("computer");
  }
  const gameBoard = character.board.board;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard.length; j++) {
      if (gameBoard[i][j].shipName !== undefined) {
        var cellElement = element.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        );
        // Set the color for cells with a ship
        cellElement.style.borderColor = "blue";
        cellElement.style.backgroundColor = "#2196F3";
      }
    }
  }
};

const gameLoop = () => {
  const player = new Player();
  populateGameboard(player);
  const computer = new Computer();
  generateGrid("player");
  generateGrid("computer");
  console.log(player.board.board);
  renderGameBoard(player);
};

gameLoop();
