// The entry file of your WebAssembly module.

export function fibo (n: i32): i32 {
  if (n < 2)
    return n;
  else
    return fibo(n - 2) + fibo(n - 1);
}

export function slow64 (n: f64): f64 {
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

export function slow32 (n: f32): f32 {
  let result:f32 = 0
  let invN:f32 = 1.0 / n;
  let i:f32 = 0
  while (i < n) {
    let x = NativeMathf.pow(i * invN, 7);
    result += NativeMathf.atan(x) * NativeMathf.tan(x)
    i++
  }
  return result
}

export function slowJS (n: f64): f64 {
  let result:f64 = 0
  let invN:f64 = 1.0 / n;
  let i:f64 = 0
  while (i < n) {
    let x = JSMath.pow(i * invN, 7);
    result += JSMath.atan(x) * JSMath.tan(x)
    i++
  }
  return result
}
