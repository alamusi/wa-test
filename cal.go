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
	var invN float64 = 1 / n
	var i float64
	for i < n {
		x := math.Pow(i*invN, 7)
		result += math.Atan(float64(x)) * math.Tan(float64(x))
		i++
	}
	return result
}

func main() {
	start := time.Now()
	result := fibo(40)
	finish := time.Now()
	fmt.Println("fibo", result, "in Go runs", finish.Sub(start))

	start = time.Now()
	r2 := slow(10000000)
	finish = time.Now()
	fmt.Println("slow", r2, "in Go runs", finish.Sub(start))
}
