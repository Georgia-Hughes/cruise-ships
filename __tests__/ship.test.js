const Ship = require('../src/ship');

let ship = null;

beforeEach(() => {
  ship = new Ship('My Big Boat');
});

describe('Name Ship', () => {
  it('gives the ship a name', () => {
    expect(ship.name).toEqual('My Big Boat');
  });
});

describe('Ship has starting point', () => {
  it('gives the ship a starting point', () => {
    expect(ship.startingPort).toEqual('Liverpool');
  });
});

describe('Ship should be able to set sail from a port', () => {
  it('can leave the current port', () => {
    ship.setSail();
    expect(ship.sail).toBeTruthy();
  });
});
