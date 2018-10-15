(function exportPort() {
  function Port(name) {
    this.name = name;
    this.ships = [];
  }


  Port.prototype = {
    addShip(newShip) {
      this.ships.push(newShip);
    },
    removeShip(oldShip) {
      this.ships = this.ships.filter(ship => ship !== oldShip);
    },
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  }
}());
