// CommonJS, every files is module (by default)
// Modules 

const names = require('./4-names')
const sayHi = require('./5-utils')
console.log(names);

const data = require('./5-alternative-flavour')

console.log(data)
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)