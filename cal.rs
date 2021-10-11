use std::time::Instant;

fn fibo(n: i64) -> i64 {
  if n < 2 {
    return n;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

fn slow(n: f64) -> f64 {
	let mut result = 0.0;
	let inv_n = 1.0 / n;
	let mut i = 0.0;
	while i < n {
		let x = (i * inv_n).powf(7.0);
		result += x.atan() * x.tan();
		i += 1.0;
	}
	return result;
}

fn main() {
  let mut start = Instant::now();
  let result = fibo(40);
  let mut end = Instant::now();
  println!("fibo {} in Rust runs {:?} ", result, end.duration_since(start));


  start = Instant::now();
  let result2 = slow(10000000f64);
  end = Instant::now();
  println!("slow {} in Rust runs {:?} ", result2, end.duration_since(start));
}
