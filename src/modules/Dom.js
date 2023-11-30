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
      cell.addEventListener(
        "click",
        function (e) {
          fireTorpedo(player, e.target.dataset.x, e.target.dataset.y, computer);
          // e.target.classList.add("hit");
          if (computer.board.board[i][j]) {
            cell.classList.add("hit");
          }
        },
        { once: true }
      );

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
      if (gameBoard[i][j] !== undefined) {
        let cellElement = element.querySelector(
          `[data-x="${i}"][data-y="${j}"]`
        );
        if (gameBoard[i][j].isSunk()) {
          cellElement.classList.add("sunk");
        }

        // Set the color for cells with a ships
        cellElement.classList.add("taken");

        // add status for hit and sunk ships?
      }
    }
  }
};

function fireTorpedo(character, x, y, enemy) {
  if (character.getTurn()) {
    enemy.board.receiveAttack(x, y);
    renderGameBoard(enemy);
  }
}

export { generateGrids, renderGameBoard };
