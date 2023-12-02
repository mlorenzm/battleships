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
          turnLoop(
            e.target,
            player,
            parseInt(e.target.dataset.x),
            parseInt(e.target.dataset.y),
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
      let cellElement = element.querySelector(`[data-x="${i}"][data-y="${j}"]`);
      if (gameBoard[i][j] !== undefined) {
        if (gameBoard[i][j].isSunk()) {
          cellElement.classList.add("sunk");
        }
        // if (character.name == "player") {
        cellElement.classList.add("taken");
        // }
      }

      if (checkArray([i, j], character.board.getMissedShots())) {
        cellElement.classList.add("miss");
      }
    }
  }
};

function turnLoop(cell, character, x, y, enemy) {
  // console.log([x, y]);
  // console.log(enemy.board.getMissedShots());
  enemy.board.receiveAttack(x, y);
  if (enemy.board.board[x][y]) {
    cell.classList.add("hit");
  }

  switchTurns(character, enemy);

  let randomcoord = enemy.randomAttack(character);
  // if (character.board.board[x][y]) {
  //   cellElement.classList.add("hit");
  // }
  renderGameBoard(enemy);
  renderGameBoard(character);
}

function switchTurns(character, enemy) {
  character.toggleTurn();
  enemy.toggleTurn();
}

function checkArray(singleArray, bidimensionalArray) {
  return bidimensionalArray.some(
    (subArray) =>
      subArray.length === singleArray.length &&
      subArray.every((value, index) => value === singleArray[index])
  );
}

export { generateGrids, renderGameBoard };
