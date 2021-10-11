
# Environment

## Hardware
- MacbookPro Early 2015
- 2.7 GHz Dual-Core Intel Core i5
- 8GB 1867 MHz DDR3

## Runtime
  - Node: v14.17.5
  - Java: openjdk 11.0.12 2021-07-20
  - Python: 3.9.6
  - Go: go1.17.2 darwin/amd64
  - Rust: 1.55.0
  - Wasmer: 2.0.0

# Approach

Execute 3 times and take the average
## JavaScript
> `node cal.js`

## Java
Compile
> `javac Cal.java -d ./build`

Run
> `java -classpath ./build Cal`

## Python
> `python3 cal.py`

## Go
Compile
> `go build -o ./build/calgo cal.go`

Run
> `./build/calgo`


## Rust
Compile
> `rustc cal.rs -o ./build/calrs`

Run
> `./build/calrs`

## WebAssemby
Compile (with AssemblyScript)
> `npm install && npm run asbuild`

Run (with wasmer)
> `wasmer run ./build/optimized.wasm`

Run (with nodejs)
> `node --experimental-wasi-unstable-preview1 cal-wa.js optimized`

# Result

|  	| Memory 	| Recursive 	| Geometry 	| Notes 	|
|---	|:---:	|:---:	|:---:	|---:	|
| JavaScript 	| ~6 mb 	| ~1500 ms 	| ~1100 ms 	|  	|
| Java 	| ~12 mb 	| ~420 ms 	| ~550 ms 	|  	|
| Python 	| ~4 mb 	| ~43000 ms 	| ~4600 ms 	|  	|
| Go 	| ~0.8 mb 	| ~570 ms 	| ~440 ms 	|  	|
| Rust 	| ~0.3 mb 	| ~1300 ms 	| ~590 ms 	|  	|
| WebAssembly  	| ~1 mb 	| ~870 ms 	| ~580 ms (64bit) 	| wasmer 	|
| WebAssembly  	| ~9 mb 	| ~850 ms 	| ~560 ms (64bit) 	| nodejs 	|