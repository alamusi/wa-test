
Environment

- MacbookPro Early 2015
- 2.7 GHz Dual-Core Intel Core i5
- 8GB 1867 MHz DDR3

Memory Consumption

- JavaScript takes ~6mb
- Java takes ~9mb
- Python takes ~4mb
- WebAssemby takes ~7mb

Fibonacci (Recursive)

- JavaScript takes ~1500 ms
- Java takes ~420 ms
- Python takes ~60000 ms
- WebAssembly takes ~900 ms

Slow (Math)

- JavaScript takes ~1100 ms
- Java takes ~4400 ms
- Python takes ~10000 ms
- WebAssembly (with default `-O` and optimization for size `-O3z`)
  - WebAssembly takes ~1500 ms (NativeMath at 64bit)
  - WebAssembly takes ~420 ms (NativeMathf at 32bit) with less precision
  - WebAssembly takes ~2000 ms (JSMath at 64bit)
- WebAssembly (with optimization for speed `-O3` per @MaxGraey)
  - WebAssembly takes ~900 ms (NativeMath at 64bit)
  - WebAssembly takes ~350 ms (NativeMathf at 32bit) with less precision
  - WebAssembly takes ~2000 ms (JSMath at 64bit)
