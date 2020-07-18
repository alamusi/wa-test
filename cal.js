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
  const len = Math.pow(n, 7)
  for (let i = 0; i < len; i++) {
    result += Math.atan(i) * Math.tan(i)
  }
  return result
}

let start = Date.now()
let result = fibo(40)
let finish = Date.now()
console.log('fibo', result, 'in js runs', finish - start)

start = Date.now()
result = slow(10)
finish = Date.now()
console.log('slow', result, 'in js runs', finish - start)
