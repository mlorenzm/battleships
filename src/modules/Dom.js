import Player from "./Player";
import Computer from "./Computer";

const generateGrids = (player, computer) => {
  //player
  const playerElement = document.getElementById("player-board");
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell-element");
      cell.dataset.x = i;
      cell.dataset.y = j;
      playerElement.appendChild(cell);
    }
  }
  const computerElement = document.getElementById("computer-board");
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell-element");
      cell.dataset.x = i;
      cell.dataset.y = j;
      cell.addEventListener("click", (e) => {
        console.log(
          computer.board.board[e.target.dataset.x][e.target.dataset.y],
          computer.board.board
        );
      });

      computerElement.appendChild(cell);
    }
  }
};
const renderGameBoard = (character) => {
  let element;
  if (character.name == "player") {
    element = document.getElementById("player-board");
  } else {
    element = document.getElementById("computer-board");
  }
  const gameBoard = character.board.board;
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard.length; j++) {
      if (gameBoard[i][j].shipName !== undefined) {
        let cellElement = element.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        );
        // Set the color for cells with a ships
        cellElement.classList.add("taken");
        // add status for hit and sunk ships?
      }
    }
  }
};

function attackEvent(x, y, enemyBoard) {
  if (character.getTurn()) {
    console.log(e.target);
  }
}

export { generateGrids, renderGameBoard };
