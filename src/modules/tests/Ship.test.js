import Ship from "../Ship.js";

test("the ship has in fact size n", () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
});

test("the ship has no hits", () => {
  const ship = new Ship(3);
  expect(ship.hits).toBe(0);
});

test("the ship has a hit", () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("the ship did not got hit beyond its HP", () => {
  const ship = new Ship(3);
  for (let i = 0; i < 8; i++) {
    ship.hit();
  }
  expect(ship.hits).toBe(3);
});
test("the ship is not sunk", () => {
  const ship = new Ship(3);

  expect(ship.isSunk()).toBe(false);
});
test("the ship with hits=length is sunk", () => {
  const ship = new Ship(3);
  for (let i = 0; i < 8; i++) {
    ship.hit();
  }
  expect(ship.isSunk()).toBe(true);
});
