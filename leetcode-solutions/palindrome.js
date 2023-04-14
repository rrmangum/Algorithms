var isPalindrome = function (x) {
  y = x.toString().split("").reverse().join("");
  if (x == y) {
    return true;
  }
  return false;
};

console.log(isPalindrome(121));
