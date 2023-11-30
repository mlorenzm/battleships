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

// Dummy, in devel
// populateGameboard = (character) => {
//   // const fleet = character.board.createShipFleet();
//   // let b = 0;
//   // while (fleet.length > 0) {
//   //   const ship = fleet.shift();
//   //   let a = 0;
//   //   character.board.placeShip(a, b, ship);
//   //   b++;
//   // }
//   const ship = new Ship(2);
//   const ship_3 = new Ship(3);

//   character.board.placeShip(0, 0, ship);
//   character.board.placeShip(3, 0, ship);
//   character.board.placeShip(6, 2, ship);
//   character.board.placeShip(3, 3, ship_3);
// };

// attackEvent = (element, player) => {
//   let x = parseInt(element.getAttribute("data-x"));
//   let y = parseInt(element.getAttribute("data-y"));
//   console.log(player);
// };
export { initGame, player, computer };
