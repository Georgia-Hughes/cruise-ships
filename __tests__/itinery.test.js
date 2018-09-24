const Itinerary = require('../src/itinerary');

describe('Itinery', () => {
  it('can be created', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
 
  it('checks if itinerary has ports', () => {
    const liverpool = jest.fn();
    const manchester = jest.fn();
    const london = jest.fn();
    const itinerary = new Itinerary([liverpool, manchester, london]);

    expect(itinerary.ports).toEqual([liverpool, manchester, london]);
  });
});
