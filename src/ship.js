function Ship(currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype = {
  canSail() {
    this.currentPort = null;
  },

  dock(port) {
    this.currentPort = port;
  },
};

module.exports = Ship;
