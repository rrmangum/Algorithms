// Prime Factorization

//Problem: Given a number, find the prime factorization

const primeFactorization = (n) => {
  let factors = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};

console.log(primeFactorization(12)); // [2, 2, 3]
console.log(primeFactorization(7)); // [7]
console.log(primeFactorization(40)); // [2, 2, 2, 5]
