# SWAPI Starship demo
Sample console application using [SWAPI](https://swapi.co) for computing the numbers of stops the starships in a fleet must do to cover a distance given by the user in the command line.

![][build img]
![][license img]

---

## Table of contents

- [Getting Started](https://github.com/JaxonDvl/starwars-app#getting-started)
    - [Prerequisites](https://github.com/JaxonDvl/starwars-app#prerequisites)
    - [Installing](https://github.com/JaxonDvl/starwars-app#installing)
- [Usage](https://github.com/JaxonDvl/starwars-app#usage)
- [Testing](https://github.com/JaxonDvl/starwars-app#testing)
- [License](https://github.com/JaxonDvl/starwars-app#license)

## Getting started



### Prerequisites

You are going to need:

- **Linux, OS X or Windows**
- **Git** version control
- **NodeJS** runtime environment, version 8.2.1 or newer
- **NPM** package manager, 5.3.0 or newer

### Installing

Reproduce the following steps to get the project up and running:

Clone this repository.

```
$ git clone https://github.com/JaxonDvl/starwars-app
```

Install dependencies in the source directory.

```
$ cd starwars-app
$ npm install
```

## Usage

Make sure you are in the `starwars-app` directory. 
You can configure the environment variables in `.env` file.

```
STARWARS_SHIPS_URL=https://swapi.co/api/starships
FLEET_FILE=shipfleet.json
```

Run the app using:

```
npm start
```
Generating docs: 
```
jsdoc -d ./docs  models/ -t node_modules/docdash/
```

## Testing



## License



SWAPI Starship demo is made available under the [MIT License](http://www.opensource.org/licenses/mit-license.php).


[build img]:https://img.shields.io/badge/build-passing-brightgreen.svg
[license img]:https://img.shields.io/badge/License-MIT-green.svg