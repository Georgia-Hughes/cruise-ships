const Port = require('../src/port');

describe('Port', () => {
  it('can be created', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('checks port has a name', () => {
    this.name = 'Liverpool';
    expect(this.name).toEqual('Liverpool');
  });
});
