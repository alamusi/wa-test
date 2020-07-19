'use strict'

/**
 * WebAssembly implementation
 */
const fs = require('fs')
const loader = require('@assemblyscript/loader')
const imports = { /* imports go here */ }

module.exports = function (build) {
  const wasmModule = loader.instantiateSync(fs.readFileSync(`${__dirname}${build}`), imports).exports

  let start = Date.now()
  let result = wasmModule.fibo(40)
  let finish = Date.now()
  console.log('fibo', result, 'in webassembly runs', finish - start)

  start = Date.now()
  result = wasmModule.slow64(10)
  finish = Date.now()
  console.log('slow', result, 'in webassembly (64-bit) runs', finish - start)

  start = Date.now()
  result = wasmModule.slow32(10)
  finish = Date.now()
  console.log('slow', result, 'in webassembly (32-bit) runs', finish - start)

  start = Date.now()
  result = wasmModule.slowJS(10)
  finish = Date.now()
  console.log('slow', result, 'in webassembly (JSMath) runs', finish - start)
}
