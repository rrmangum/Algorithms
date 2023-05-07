// Write a function called isSubsequence which takes in
// two strings and checks whether the characters in the first string
// form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string,
// without their order changing.

// UNDERSTAND THE PROBLEM
// Restate: check if the first string is in the second string with the same order
// Inputs: Two strings, strings of numbers?, special characters? spaces?
// Outputs: boolean
// Enough: Will it matter if the first string appears in the second string with
// the same characters, but the second string has an additional character in between?
// Data: func: isSubsquence; inputs: first, second; outputs: boolean, pointers: i, j

// CONCRETE EXAMPLES
// Simple:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// Complex:
// isSubsequence('abc', 'acb'); // false (order matters)
// isSubsequence('123', '15253'); // true
// Empty:
// isSubsequence('', 'acb'); // true
// isSubsequence('', ''); // false
// Invalid:
// isSubsequence(123, 123); // null?

// BREAK IT DOWN
// first string is my comparison
// loop through second string
// check each iteration for character matches

// SOLVE/SIMPLIFY
function isSubsequence(first, second) {
  let i = 0;
  let j = 0;
  if (!first) return true;
  while (j < second.length) {
    if (second[j] === first[i]) i++;
    if (i === first.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
