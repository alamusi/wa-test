import "wasi"
import { Date, Console } from "as-wasi"

export function fibo (n: i32): i32 {
  if (n < 2)
    return n;
  else
    return fibo(n - 2) + fibo(n - 1);
}

export function slow (n: f64): f64 {
  let result:f64 = 0
  let invN:f64 = 1.0 / n;
  let i:f64 = 0
  while (i < n) {
    let x = NativeMath.pow(i * invN, 7);
    result += NativeMath.atan(x) * NativeMath.tan(x)
    i++
  }
  return result
}

let start = Date.now()
let result1 = fibo(40)
let finish = Date.now()
Console.log('fibo ' + result1.toString() + ' in webassembly runs ' + (finish - start).toString())

start = Date.now()
let result2 = slow(10000000)
finish = Date.now()
Console.log('slow ' + result2.toString() + ' in webassembly runs ' + (finish - start).toString())
