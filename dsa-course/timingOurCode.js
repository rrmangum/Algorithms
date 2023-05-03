// calculate the sum of all numbers from 1 up to and including some number n
// ~1.25s runtime
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(5));

// another approach
// ~0.0001s runtime
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo2(5));
