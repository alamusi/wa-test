"""
Python Implementation
"""

import time
import math

def fibo(n):
  if n < 2:
    return n
  else:
    return fibo(n-2) + fibo(n-1)

start = time.time()
result = fibo(40)
finish = time.time()

print('fibo', result, 'in python runs', int((finish - start)*1000))

def slow(n):
  result = 0
  invN = 1 / n
  i = 0
  while (i < n):
    x = math.pow(i * invN, 7)
    result += math.atan(x) * math.tan(x)
    i += 1
  return result

start = time.time()
result = slow(10000000)
finish = time.time()

print('slow', result, 'in python runs', int((finish - start)*1000))