
Simple project seed for a Node.js module using TypeScript.

## Features

- build a Node.js module with type definitions
- automate tests
- build JSON Schema definitions from source code
- build API reference documentation from source code
- build submodules as ECMAScript modules
- initial configurations easy to customize and extend

## Installing dependencies

`yarn`

## Building

`yarn build`

## Known Issues

- local imports must have the complete relative path to files including the
  extension `.js` (it is a Node.js 14 requirement)
- code coverage reports is not working probably because of the above issue and
  are disabled, causing Node Tap to not run in watch mode
- tested only with Node.js 14
