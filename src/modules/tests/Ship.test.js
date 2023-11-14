import Ship from "../Ship.js";

const ship = new Ship(3);

test("the ship has in fact size 3", () => {
  expect(ship.length).toBe(3);
});
