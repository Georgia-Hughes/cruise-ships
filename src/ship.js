function Ship(name) {
  this.name = name;
  this.startingPort = 'Liverpool';
  this.sail = true;
}

Ship.prototype = {
  get canSail() {
    if (this.startingPort === 'Liverpool') {
      return true;
    }
    return false;
  },
};

Ship.prototype.setSail = function setSail() {
  if (!this.canSail) {
    throw new Error('Your ship cannot leave port!');
  } else {
    this.sail = true;
  }
};

module.exports = Ship;
