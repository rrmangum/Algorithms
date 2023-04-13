// Recursive Fibonacci Sequence

// Problem: Given a number n, find the nth element of the Fibonacci sequence

// Fibonacci sequence is a set of numbers in which each number is the sum of the two preceding ones
// recursiveFibonacci(0) = 0
// recursiveFibonacci(1) = 1
// recursiveFibonacci(6) = 8

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

// Time complexity: O(2^n) -
// Space complexity: O(1) - Constant
