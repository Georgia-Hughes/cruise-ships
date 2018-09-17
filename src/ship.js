function Ship(name) {
  this.name = name;
  this.startingPort = 'Liverpool';
}

Ship.prototype = {
  get canSail() {
    if (this.startingPort === 'Liverpool') {
      return true;
    }
    return false;
  },
};

Ship.prototype.startPort = function startPort() {
  if (!this.canSail) {
    throw new Error('Your ship cannot leave port!');
  } else {
    this.startingPort = 'Liverpool';
  }
};

module.exports = Ship;
