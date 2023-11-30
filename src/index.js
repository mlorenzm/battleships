import "./style.scss";

import Game from "./modules/Game";

const init = () => {
  const game = new Game();
  game.populateGameboard(game.player);
  game.populateGameboard(game.computer);
  game.generateGrid("player");
  game.generateGrid("computer");
  game.renderGameBoard(game.player);

  // while (
  //   player.getTurn() &&
  //   (!player.board.allShipsSunk() || !computer.board.allShipsSunk())
  // ) {
  //   computer.board.
  // }
};
init();
