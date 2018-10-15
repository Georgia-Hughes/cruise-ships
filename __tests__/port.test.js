const Port = require('../src/port');

let port;
let boat;

beforeEach(() => {
  port = new Port('Liverpool');
  boat = jest.fn();
});

describe('Port', () => {
  it('can be created', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('checks port has a name', () => {
    expect(port.name).toEqual('Liverpool');
  });
});

describe('addShip', () => {
  it('returns the added ships', () => {
    port.addShip(boat);
    expect(port.ships).toContain(boat);
  });
});

describe('removeShip', () => {
  it('removes a ship', () => {
    port.addShip(boat);
    port.removeShip(boat);
    expect(port.ships).toEqual([]);
  });
});
