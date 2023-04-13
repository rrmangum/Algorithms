// Prime Number

//Problem: Given a natural number n, determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(1)); // false
console.log(isPrime(5)); // true
console.log(isPrime(4)); // false

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant

// Optimal Solution

// Integers larger than the square root do not need to be ehcekd because, whenever n=a*b,
// one of the two factors a and b is less than or equal to the square root of n.

const isPrimeOptimized = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeOptimized(1)); // false
console.log(isPrimeOptimized(5)); // true
console.log(isPrimeOptimized(4)); // false

// Time complexity: O(sqrt(n)) -
// Space complexity: O(1) - Constant
