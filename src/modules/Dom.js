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
          fireTorpedo(
            e.target,
            player,
            e.target.dataset.x,
            e.target.dataset.y,
            computer
          );
          // e.target.classList.add("hit");
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

        // if (character.name == "player")  COMMENT THIS OUT
        cellElement.classList.add("taken");
        // }
      }
    }
  }
};

function fireTorpedo(cell, character, x, y, enemy) {
  enemy.board.receiveAttack(x, y);
  if (enemy.board.board[x][y]) {
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
  }
  switchTurns(character, enemy);
  renderGameBoard(enemy);

  enemy.randomAttack(character);

  renderGameBoard(character);
}

export { generateGrids, renderGameBoard };
