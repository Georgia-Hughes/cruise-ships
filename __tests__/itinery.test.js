const Itinerary = require('../src/itinerary');
const Port = require('../src/port');

describe('Itinery', () => {
  it('can be created', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  
  it('checks if itinerary has ports', () => {
    const liverpool = new Port('Liverpool');
    const manchester = new Port('Manchester');
    const london = new Port('London');
    const itinerary = new Itinerary([liverpool, manchester, london]);

    expect(itinerary.ports).toEqual([liverpool, manchester, london]);
  });
});
