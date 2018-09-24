const Port = require('../src/port');

let port;
let ships;

beforeEach(() => {
  ships = ['My Big Boat'];
  port = new Port('Liverpool', ships);
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
    port.addShip('Even Bigger Boat');
    expect(port.ships).toEqual(['My Big Boat', 'Even Bigger Boat']);
  });
});

describe('removeShip', () => {
  it('removes a ship', () => {
    port.removeShip('Even Bigger Boat');
    expect(port.ships).toEqual(['My Big Boat']);
  });
});
