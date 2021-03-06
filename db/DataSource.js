const axios = require('axios');
const nodeUtils = require('util');
let utils = require('../helpers/utils');
const fs = require('fs');
const readFile = nodeUtils.promisify(fs.readFile);

/**
 * @class - Describes a database mock of the available resources for the command center
 * @property {Object} starshipTable - List of ships in the database
 * */

class DataSource {
  constructor() {
    this.starshipTable = [];
  }

  async init() {
    let nextShipUrl = process.env.STARWARS_SHIPS_URL;
    while (nextShipUrl) {
      await axios
        .get(nextShipUrl)
        .then(response => {
          nextShipUrl = response.data.next;
          response.data.results.forEach(starship => {
            this.starshipTable.push(starship);
          });
          console.log(response.data.next);
        })
        .catch(err => {
          throw utils.HTTPErrorMessage(err.response.status);
        });
    }
    console.log(
      `${this.starshipTable.length} Battleships loaded pick a distance:`
    );
  }

  async initFromFile() {
    await readFile(process.env.FLEET_FILE, 'utf8')
      .then(data => {
        this.starshipTable = JSON.parse(data);
        console.log(
          `${
            this.starshipTable.length
          } Battleships loaded from file pick a distance:`
        );
      })
      .catch(err => {
        throw err;
      });
  }

  getStarShips() {
    return this.starshipTable;
  }
}

module.exports = DataSource;
