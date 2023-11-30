import Player from "./Player";
import Computer from "./Computer";
import Ship from "./Ship";
import { generateGrids, renderGameBoard } from "./Dom";
let player, computer;

function initGame() {
  player = new Player();
  computer = new Computer();
  computer.placeRandomFleet();
  player.placeRandomFleet();
  generateGrids(player, computer);
  renderGameBoard(computer);
  renderGameBoard(player);
}

// attackEvent = (element, player) => {
//   let x = parseInt(element.getAttribute("data-x"));
//   let y = parseInt(element.getAttribute("data-y"));
//   console.log(player);
// };
export { initGame, player, computer };
