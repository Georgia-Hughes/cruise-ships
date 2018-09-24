const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary.js');

let ship;
let itinerary;
let liverpool;
let manchester;

beforeEach(() => {
  liverpool = new Port('Liverpool');
  manchester = new Port('Manchester');
  itinerary = new Itinerary([liverpool, manchester]);
  ship = new Ship(itinerary);
});

describe('Ship', () => {
  it('can be created', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toBe(liverpool);
  });

  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it('can dock at a new port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(manchester);
  });
});
