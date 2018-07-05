const utils = require('../helpers/utils');

/**
 * @class - Describes a unique valid star ship available in our fleet
 * @property {string} name - Name of the ship
 * @property {string} consumables - Amount of time until resupply is needed
 * @property {string} MGLT - Mega lights rate per hour
 * @property {number} mgltDistanceCapacity - Distance that can be covered given MGLT and consumables
 * */

class StarShip {
  /**
   * @param {string} name - Name of the ship
   * @param {string} consumables - Amount of time until resupply is needed
   * @param {number} MGLT - Distance that can be covered given MGLT and consumables
   */
  constructor(name, consumables, MGLT) {
    this.name = name;
    this.consumables = consumables;
    this.MGLT = MGLT;
    this.mgltDistanceCapacity =
      parseInt(MGLT) * utils.convertTimeToHours(consumables);
  }
}

module.exports = StarShip;
