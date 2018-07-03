require('dotenv').config();
let utils = require('./utils');

const readline = require('readline');
const ShipFleet = require('./ShipFleet');
const DataStore = require('./DataStore');

const readLineEvents = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function setup(hciInterface) {
  console.log('Please standby. Loading Battleships ...');
  hciInterface.pause();
  let databaseInstance = new DataStore();
  databaseInstance
    .init()
    .then(() => {
      let myShipFleet = new ShipFleet(databaseInstance.getStarShips());
      hciInterface.resume();
      hciInterface.on('line', input => {
        let distanceBetweenPlanets = parseFloat(input);
        if (distanceBetweenPlanets) {
          myShipFleet
            .getShipsStopNumber(distanceBetweenPlanets)
            .forEach(ship => {
              console.log(`${ship['name']}: ${ship['stops']}`);
            });
        } else {
          console.error('Invalid Input');
        }
      });
    })
    .catch(err => {
      console.error(err);
    });
}

setup(readLineEvents);
