var isPalindrome = function (x) {
  y = x.toString().split("").reverse().join("");
  if (x == y) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));

// Time complexity: O(1) - Constant
// Space complexity: O(1) - Constant

// Can also use a deprecating for loop

// var isPalindrome = function (x) {
//   y = x.toString();
//   newString = "";

//   for (let i = y.length; i >= 0; i--) {
//     newString += y[i];
//   }

//   if (x == y) {
//     return true;
//   }

//   return false;
// };

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
