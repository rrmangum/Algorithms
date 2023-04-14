/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let integer = 0;

  // Create a hash table
  let romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    const currentNumber = romanObj[s[i]];
    const nextNumber = romanObj[s[i + 1]];

    if (currentNumber < nextNumber) {
      integer += nextNumber - currentNumber;
      i++;
    } else {
      integer += currentNumber;
    }
  }
  return integer;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
