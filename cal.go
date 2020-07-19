package main

import (
	"fmt"
	"math"
	"time"
)

func fibo(n int) int {
	if n < 2 {
		return n
	} else {
		return fibo(n-2) + fibo(n-1)
	}
}

func slow(n float64) float64 {
	var result float64
	var i int64
	for i = 0; i < int64(math.Pow(n, 7)); i++ {
		result += math.Atan(float64(i)) * math.Tan(float64(i))
	}
	return result
}

func main() {
	start := time.Now()
	result := fibo(40)
	finish := time.Now()
	fmt.Println("fibo", result, "in Go runs", finish.Sub(start))

	start = time.Now()
	r2 := slow(10)
	finish = time.Now()
	fmt.Println("slow", r2, "in Go runs", finish.Sub(start))
}
