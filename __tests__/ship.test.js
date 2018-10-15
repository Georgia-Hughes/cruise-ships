const Ship = require('../src/ship.js');

let ship;
let liverpool;
let manchester;

beforeEach(() => {
  const ports = {
    removeShip: jest.fn(),
    addShip: jest.fn(),
  };
  liverpool = {
    ...ports,
    name: 'Liverpool',
    ships: [],
  };
  manchester = {
    ...ports,
    name: 'Manchester',
    ships: [],
  };
  const itinerary = {
    ports: [liverpool, manchester],
  };
  ship = new Ship(itinerary);
});

describe('Ship', () => {
  it('can be created', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toBe(liverpool);
  });

  it('gets added to port on instantiation', () => {
    expect(liverpool.addShip).toHaveBeenCalledWith(ship);
  });
  
  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(liverpool.removeShip).toHaveBeenCalledWith(ship);
  });

  it('can dock at a new port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(manchester);
    expect(manchester.addShip).toHaveBeenCalledWith(ship);
  });
});
