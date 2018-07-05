const StarShip = require('./StarShip');

/**
 * @class - Describes the list and available operations on the list of available ships
 * @property {Object} listOfShips - List of ships that are validated for the fleet
 * */

class ShipFleet {
  /**
   * @param {Object} listOfShips - List of ships loaded from the database
   */
  constructor(listOfShips) {
    const listOfValidShips = listOfShips.filter(ship =>
      this._filterValidShips(ship)
    );
    this.listOfShips = listOfValidShips.map(ship =>
      this._mapPropsToSchemaFactory(ship)
    );
  }
  getShipsStopNumber(distance) {
    return this.listOfShips.map(ship =>
      this._formatFleetOutput(ship, distance)
    );
  }
  /**
   * Filters ship that are not suitable for our fleet
   * @param {Object} ship - A ship object from the database
   * @return {boolean} False if the object is not suitable for our data structure, otherwise return true
   */
  _filterValidShips(ship) {
    {
      if (
        ship['name'] === 'unknown' ||
        ship['consumables'] === 'unknown' ||
        ship['MGLT'] === 'unknown'
      )
        return false;
      return true;
    }
  }
  /**
   * Converts star ship details to a star ship object
   * @param {Object} ship - A ship object from the database
   * @return {StarShip} A StarShip object having only relevant fields
   */
  _mapPropsToSchemaFactory(ship) {
    {
      return new StarShip(ship['name'], ship['consumables'], ship['MGLT']);
    }
  }
  /**
   * Format the selected fleet  into a human readable interface
   * @param {Object} ship - A ship object from the database
   * @param {number} distance - Give distance for our fleet to trail
   * @return {Object} Return human readable data structure for each ship and their stops number
   */
  _formatFleetOutput(ship, distance) {
    return {
      name: ship['name'],
      stops: this._computeStopDistance(ship, distance)
    };
  }
  /**
   * Compute the number o stops each star ship in a fleet must make to reach a certain distance
   * @param {Object} ship - A ship object from the database
   * @param {number} distance - Give distance for our fleet to trail
   * @return {number} The numbers of stops the starship must do
   */
  _computeStopDistance(ship, distance) {
    return Math.floor(distance / ship['mgltDistanceCapacity']);
  }
}

module.exports = ShipFleet;
