'use strict'

/**
 * JavaScript implementation
 */
function fibo (n) {
  if (n < 2) {
    return n
  } else {
    return fibo(n - 2) + fibo(n - 1)
  }
}

function slow (n) {
  let result = 0
  const invN = 1 / n
  let i = 0
  while (i < n) {
    const x = Math.pow(i * invN, 7)
    result += Math.atan(x) * Math.tan(x)
    i++
  }
  return result
}

let start = Date.now()
let result = fibo(40)
let finish = Date.now()
console.log('fibo', result, 'in js runs', finish - start)

start = Date.now()
result = slow(10000000)
finish = Date.now()
console.log('slow', result, 'in js runs', finish - start)
