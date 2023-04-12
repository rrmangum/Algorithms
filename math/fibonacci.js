// Fibonacci sequence

// Problem: Given a number n, find the first n elements of the Fibonacci sequence

// Fibonacci sequence is a set of numbers in which each number is the sum of the two preceding ones
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
