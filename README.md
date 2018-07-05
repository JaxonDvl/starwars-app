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
- [Docs](https://github.com/JaxonDvl/starwars-app#docs)
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

```bash
$ cd starwars-app
$ npm install
```

If we are going to deploy this app to a production environment we may want to omit development dependencies for testing and docs generation. Just install the dependencies with the `--production` flag:

```bash
$ cd starwars-app
$ npm --production install
```

## Usage

Make sure you are in the `starwars-app` directory. 
You can configure the environment variables in `.env` file.

```
STARWARS_SHIPS_URL=https://swapi.co/api/starships
FLEET_FILE=shipfleet.json
```

Run the app using:

```bash
$ npm start
```


## Testing



## Docs

Install [JSDoc 3](https://github.com/jsdoc3/jsdoc) documentation generator for JavaScript:

```bash
$ npm install -g jsdoc
```

If you installed the app in production mode as seen in [Installing](https://github.com/JaxonDvl/starwars-app#installing) chapter, make sure you install the node modules without the `--production` flag to include [Docdash](https://github.com/clenemt/docdash) template module in our source tree:

```bash
$ cd starwars-app
$ npm install
```


Generating the docs: 
```bash
$ cd starwars-app
$ npm run docs
```

The output will be available in the `docs` folder and for this reporsitory on GitHub Pages at [Star Wars App Docs](https://jaxondvl.github.io/starwars-app/)

For future development we can include or exclude files that we want to document in `jsdoc_conf.json` file:

```json
"source": {
        "include": ["db","helpers","models", "consoleApp.js", "README.md"],
        "includePattern": ".+\\.js(doc|x)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    }
```

## License



SWAPI Starship demo is made available under the [MIT License](http://www.opensource.org/licenses/mit-license.php).


[build img]:https://img.shields.io/badge/build-passing-brightgreen.svg
[license img]:https://img.shields.io/badge/License-MIT-green.svg