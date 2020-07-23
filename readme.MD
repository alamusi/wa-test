
Environment

- MacbookPro Early 2015
- 2.7 GHz Dual-Core Intel Core i5
- 8GB 1867 MHz DDR3

Memory Consumption

- JavaScript takes ~6mb
- Java takes ~9mb
- Python takes ~4mb
- WebAssemby takes ~7mb
- Go takes ~0.8mb

Fibonacci (Recursive)

- JavaScript takes ~1500 ms
- Java takes ~420 ms
- Python takes ~60000 ms
- WebAssembly takes ~900 ms
- Go takes ~750 ms

Slow (Math)

- JavaScript takes ~1100 ms
- Java takes ~1500 ms
- Python takes ~6500 ms
- WebAssembly (with default `-O` and optimization for size `-O3z`)
  - WebAssembly takes ~1100 ms (NativeMath at 64bit)
  - WebAssembly takes ~430 ms (NativeMathf at 32bit) with less precision
  - WebAssembly takes ~1300 ms (JSMath at 64bit)
- WebAssembly (with optimization for speed `-O3` per @MaxGraey)
  - WebAssembly takes ~560 ms (NativeMath at 64bit)
  - WebAssembly takes ~320 ms (NativeMathf at 32bit) with less precision
  - WebAssembly takes ~1300 ms (JSMath at 64bit)
- Go takes ~570 ms
