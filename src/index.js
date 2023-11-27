import "./style.scss";

import Player from "./modules/Player";
import Computer from "./modules/Computer";

const generateGrid = (x) => {
  const element = document.getElementById(x);
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement("div");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.addEventListener("click", () => {
        return [parseInt(cell.dataset.x), parseInt(cell.dataset.y)];
      });
      element.appendChild(cell);
    }
  }
};

const gameLoop = () => {
  const player = new Player();
  const computer = new Computer();
};

generateGrid("player");
generateGrid("computer");
