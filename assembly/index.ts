// The entry file of your WebAssembly module.

export function fibo(n: i32): i32 {
  if (n < 2)
    return n;
  else
    return fibo(n - 2) + fibo(n - 1);
}

export function slow64 (n: f64): f64 {
  let result:f64 = 0
  let i:f64 = 0
  while (i < NativeMath.pow(n, 7)) {
    result += NativeMath.atan(i) * NativeMath.tan(i)
    i++
  }
  return result
}

export function slow32 (n: f32): f32 {
  let result:f32 = 0
  let i:f32 = 0
  while (i < NativeMathf.pow(n, 7)) {
    result += NativeMathf.atan(i) * NativeMathf.tan(i)
    i++
  }
  return result
}

export function slowJS (n: f64): f64 {
  let result:f64 = 0
  let i:f64 = 0
  while (i < JSMath.pow(n, 7)) {
    result += JSMath.atan(i) * JSMath.tan(i)
    i++
  }
  return result
}
