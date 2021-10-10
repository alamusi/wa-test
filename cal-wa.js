'use strict'

const fs = require('fs')
const { WASI } = require("wasi")
const wasi = new WASI()

module.exports = function (build) {
  const imports = { wasi_snapshot_preview1: wasi.wasiImport }
  const wasmBuffer = fs.readFileSync(`${__dirname}${build}`)
  WebAssembly.instantiate(wasmBuffer, imports).then(wasmModule => {
    let start = Date.now()
    let result = wasmModule.instance.exports.fibo(40)
    let finish = Date.now()
    console.log('fibo', result, 'in webassembly runs', finish - start)
  
    start = Date.now()
    result = wasmModule.instance.exports.slow64(10000000)
    finish = Date.now()
    console.log('slow', result, 'in webassembly (64-bit) runs', finish - start)
  
    start = Date.now()
    result = wasmModule.instance.exports.slow32(10000000)
    finish = Date.now()
    console.log('slow', result, 'in webassembly (32-bit) runs', finish - start)
  })
}
