function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
}

Ship.prototype = {
  setSail() {
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);
    if (currentPortIndex === (this.itinerary.ports.length - 1)) {
      throw new Error('Your cruise has ended');
    }
    this.previousPort = this.currentPort;
    this.currentPort = null;
  },
  dock() {
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  },
};

module.exports = Ship;
