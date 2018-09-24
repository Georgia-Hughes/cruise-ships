function Port(name, ships) {
  this.name = name;
  this.ships = ships;
}

Port.prototype = {
  addShip(newShip) {
    this.ships.push(newShip);
  },
  removeShip(oldShip) {
    this.ships = this.ships.filter(ship => ship !== oldShip);
  },
};
module.exports = Port;
