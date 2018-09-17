const Ship = require('../src/ship');

let ship = null;

beforeEach(() => {
 ship = new Ship('My Big Boat');
});

describe('Ship has starting point', () => {
 it('gives the ship a starting point', () => {
  expect(ship.startingPort).toEqual('Liverpool');
 });
});