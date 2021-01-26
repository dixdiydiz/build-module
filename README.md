# build-module

require module from string

## Install

$ npm install --save-dev build-module  
$ yarn add -D build-module

## Usage

var requireFromString = require('build-module');  
const result = requireFromString('module.exports = 3'); // 1

## API

### Syntax

requireFromString(code[, filename])

### Parameters

code `Required`  
Type: string  
Desc: Module code.

filename`Optional`  
Type: string  
Desc: absolute file name.
Default: ''

### Return value

If file provide,it will simple return `require(filename)`  
otherwise, `module.exports` which in the code will be returned.

---

License
MIT © dry
