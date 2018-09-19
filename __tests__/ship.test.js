const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship', () => {
  it('can be created', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    const port = new Port('Liverpool');
    const ship = new Ship(port);
    expect(ship.currentPort).toBe(port);
  });

  it('can leave the port', () => {
    const port = new Port('Liverpool');
    const ship = new Ship(port);
    ship.canSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it('can dock in another port', () => {
    const liverpool = new Port('Liverpool');
    const ship = new Ship(liverpool);
    const manchester = new Port('Manchester');
    ship.dock(manchester);
    expect(ship.currentPort).toBe(manchester);
  });
});
