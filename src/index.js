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

const populateGameboard = (character) => {
  const fleet = character.board.createShipFleet();
  let b = 0;
  while (fleet.length > 0) {
    const ship = fleet.shift();
    let a = 0;
    character.board.placeShip(a, b, ship);
    console.log(b);
    b++;
  }
};

const renderGameBoard = (character) => {
  const element = document.getElementById(character);
  console.log(element);
};

const gameLoop = () => {
  const player = new Player();
  populateGameboard(player);
  const computer = new Computer();
  generateGrid("player");
  generateGrid("computer");
  renderGameBoard("player");
};

gameLoop();
