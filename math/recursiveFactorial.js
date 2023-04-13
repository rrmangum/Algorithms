// Recursive Factorial

// Problem: Given an integer n, find the factorial of that integer

// The factorial of a non-negative integer n, is the product of all positive integers less than or equal to n

// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
