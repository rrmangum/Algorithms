// Power of Two

// Problem: Given a positive integer n, determine if the number is a power of 2 or not

// An integer is a power of two if there exists an integer x such that n === 2^x

// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// Time complexity: O(logn) - Logarithmic
// Space complexity: O(1) - Constant

// Optimal Solution

const isPowerOfTwoOptimized = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwoOptimized(1)); // true
console.log(isPowerOfTwoOptimized(2)); // true
console.log(isPowerOfTwoOptimized(5)); // false

// Time complexity: O(1) - Constant
// Space complexity: O(1) - Constant
