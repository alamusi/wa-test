'use strict'

const fs = require('fs')
const { WASI } = require("wasi")
const wasi = new WASI()

const imports = { wasi_snapshot_preview1: wasi.wasiImport }
const wasmBuffer = fs.readFileSync(`${__dirname}/build/${process.argv[2] || 'optimized'}.wasm`)
WebAssembly.instantiate(wasmBuffer, imports).then(wasmModule => {
  let start = Date.now()
  let result = wasmModule.instance.exports.fibo(40)
  let finish = Date.now()
  console.log('fibo', result, 'in webassembly runs', finish - start)

  start = Date.now()
  result = wasmModule.instance.exports.slow(10000000)
  finish = Date.now()
  console.log('slow', result, 'in webassembly runs', finish - start)
})
