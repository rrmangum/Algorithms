// Factorial of a number

// Problem: Given an integer n, find the factorial of that integer

// Factorial (n!) is the product of all positive integers less than or equal to n
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
