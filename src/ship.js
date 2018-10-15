(function exportShip() {
  const Ship = function Ship(itinerary) {
    this.itinerary = itinerary;
    this.currentPort = this.itinerary.ports[0];
    this.currentPort.addShip(this);

    this.tripLength = this.itinerary.ports.length;
    this.previousPort = null;
    this.portIndex = 0;
  };

  Ship.prototype = {
    setSail() {
      const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
      if (currentPortIndex === (this.itinerary.ports.length - 1)) {
        throw new Error('Your cruise has ended');
      }
      this.previousPort = this.currentPort;
      this.currentPort.removeShip(this);
      this.currentPort = null;
    },
    dock() {
      const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
      this.currentPort = this.itinerary.ports[previousPortIndex + 1];
      this.currentPort.addShip(this);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Ship;
  } else {
    window.Ship = Ship;
  }
}());
