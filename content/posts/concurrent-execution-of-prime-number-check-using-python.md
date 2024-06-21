+++
author = "Md Abid Khan"
title = "Concurrent execution and multiprocessing using Python"
date = "2023-12-18"
description = "It's a try to figure out Python's ability for scalable application"
tags = [
    "Python3",
    "Concurrency",
    "Multithreading",
]
categories = [
    "Scalability",
]
authors = ["Abid"]
aliases = ["concurrent-execution-of-prime-number-check-using-python"]
favorite = true
+++
### Concurrent execution and multiprocessing using Python

![Fig: Multiple processes are running concurrently](../images/multi-process-python.png "Fig: Multiple processes are running concurrently")

Python defaults to a single-threaded execution due to the Global Interpreter Lock (GIL). Despite the pros and cons associated with the GIL, Python now supports the implementation of multiple interpreters concurrently.

This playground implements the multithreading concept using a Python program to maximize concurrency, leveraging the `concurrent.futures` module.

A prime-checking program has been developed, omitting optimized algorithms like the Sieve of Eratosthenes. When executed in the typical single-threaded fashion, the program takes 83 seconds to count the number of primes from 1 to 10 million.

```python
#! /usr/bin/python3

from math import floor, sqrt
import time

def is_prime(number: int) -> bool:
    if not (number & 1): return 0

    iteration = floor(sqrt(number)) + 1
    for i in range(3, iteration, 2):
        if not (number % i): return 0
    return 1

def prime_count_in_range(start: int, end: int) -> int:
    start_time = time.time()
    total = sum(is_prime(number) for number in range(start, end+1))
    end_time = time.time()
    print(f"Execution time is {end_time - start_time} where count of primes is {total} and start {start} end {end}")

    return total

def main() -> int:
    h_range = 10_000_000
    prime_count_in_range(1, h_range)

if __name__ == 'main':
    main()

# Total execution time is 83.45069789886475 where count of primes is 664579 (10M)
```

To enhance concurrency, ten processes are created to concurrently check chunks of 1 million numbers for primality in parallel. Each process is responsible for executing its designated chunk. As a result, the total execution time has been significantly reduced to 35 seconds.

```python
#! /usr/bin/python3

import concurrent.futures
from math import floor, sqrt
import time

def is_prime(number: int) -> bool:
    if not (number & 1): return 0

    iteration = floor(sqrt(number)) + 1
    for i in range(3, iteration, 2):
        if not (number % i): return 0
    return 1

def prime_count_in_range(start: int, end: int) -> int:
    start_time = time.time()
    total = sum(is_prime(number) for number in range(start, end+1))
    end_time = time.time()
    print(f"Execution time is {end_time - start_time} where count of primes is {total} and start {start} end {end}")

    return total

def main() -> int:
    max_workers = 10
    h_range = 10_000_000
    start_time = time.time()

    total_prime = 0
    with concurrent.futures.ProcessPoolExecutor(max_workers=max_workers) as executor:
        difference = h_range // max_workers
        futures = {executor.submit(prime_count_in_range, i*difference, (i+1)*difference) for i in range(max_workers)}

        for prime_count in concurrent.futures.as_completed(futures):
            try:
                total_prime += prime_count.result()
            except Exception as e:
                print(f"An error occurred: {e}")

    end_time = time.time()
    print(f"Total execution time is {end_time - start_time} where count of primes is {total_prime}")

if __name__ == 'main':
    main()

# Execution time is 13.428580284118652 where count of primes is 78498 and start 0 end 1000000
# Execution time is 20.32423686981201 where count of primes is 70435 and start 1000000 end 2000000
# Execution time is 25.322699308395386 where count of primes is 67883 and start 2000000 end 3000000
# Execution time is 27.458441495895386 where count of primes is 66330 and start 3000000 end 4000000
# Execution time is 29.976609706878662 where count of primes is 65367 and start 4000000 end 5000000
# Execution time is 31.90796446800232 where count of primes is 64336 and start 5000000 end 6000000
# Execution time is 32.69068694114685 where count of primes is 63799 and start 6000000 end 7000000
# Execution time is 34.158379316329956 where count of primes is 63129 and start 7000000 end 8000000
# Execution time is 34.51458287239075 where count of primes is 62712 and start 8000000 end 9000000
# Execution time is 35.21281599998474 where count of primes is 62090 and start 9000000 end 10000000
# Total execution time is 35.29995679855347 where count of primes is 664579
```

**Note:** It is recommended to be careful when dealing with dependent data during the execution on multiple threads as it can cause inconsistency.