const StarShip = require('./StarShip');

class ShipFleet {
  constructor(listOfShips) {
    const listOfValidShips = listOfShips.filter(ship => {
      if (
        ship['name'] === 'unknown' ||
        ship['consumables'] === 'unknown' ||
        ship['MGLT'] === 'unknown'
      )
        return false;
      return true;
    });
    this.listOfShips = listOfValidShips.map(ship => {
      return new StarShip(ship['name'], ship['consumables'], ship['MGLT']);
    });
  }
  getShipsStopNumber(distance) {
    return this.listOfShips.map(ship => {
      return {
        name: ship['name'],
        stops: Math.floor(distance / ship['mgltDistanceCapacity'])
      };
    });
  }
  getShips() {
    return this.listOfShips;
  }
}

module.exports = ShipFleet;
