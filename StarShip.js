const utils = require('./utils');
class StarShip {
  constructor(name, consumables, MGLT) {
    this.name = name;
    this.consumables = consumables;
    this.MGLT = MGLT;
    this.mgltDistanceCapacity =
      parseInt(MGLT) * utils.convertTimeToHours(consumables);
  }
}

module.exports = StarShip;
