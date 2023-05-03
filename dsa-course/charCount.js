// Write a function which takes in a string and returns counts of each character in the string

// Step 1 - UNDERSTAND THE PROBLEM
// -Restate the problem:
// take each character in a string and count the number of times it appears
// -What are the inputs:
// string, does the length of the string matter?, what about an empty string? undefined? null?
// -What are the outputs:
// object, each key will be the character that appears in the string, and the value will be the count of how many times that character is in the string
// -Can outputs be determined from the inputs/do I have enough information:
// how should I handle special characters? numbers? letters? casing?
// -How should I label the data:
// function - charCount
// input - str
// output - result

// Step 2 - CONCRETE EXAMPLES
// -Simple examples:
// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h:1, e:1, l:2, o:1}
// -Complex examples:
// charCount("Your PIN number is 1234!");
// {1:1,
//  2:1,
//  3:1,
//  4:1,
//  b:1,
//  e:1,
//  i:2,
//  m:1,
//  n:2,
//  o:1,
//  p:1,
//  r:2,
//  s:1,
//  u:2,
//  y:1
//  }
// -Empty inputs:
// charCount("") - what is supposed to happen?
// charCount()
// -Invalid inputs:
// charCount(3) - what is supposed to happen?
// charCount(false)

// Step 3 - BREAK IT DOWN
// -Write down steps you need to take
// function charCount(str) {
// return an object with keys that are lowercase alphanumeric characters in the string

// make an object to return at the end
// loop over the string, for each character...
// if charc is a number/letter AND a key in the object, add one to count
// if char is a number/letter AND not a key in the object, add it and set value to 1
// if char is something else (space, period, special character), do nothing
// return object
// }

// Step 4 - SOLVE/SIMPLIFY
// -Ignore difficulties (alphanumeric only is hard)
// function charCount(str) {
//     let result = {};
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i].toLowerCase();
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//     return result;
//   }

// -Add difficulties back in
// function charCount(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         result[char] = 1;
//       }
//     }
//   }
//   return result;
// }

// Step 5 - LOOK BACK AND REFACTOR
// clean up aesthetics
// function charCount(str) {
//   let result = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       result[char] = ++result[char] || 1;
//     }
//   }
//   return result;
// }

// Regular expressions are a great tool, but their performance can vary depending on the task and what browser is being used
function charCount(str) {
  let result = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("aaaa"));
console.log(charCount("hello"));
console.log(charCount("Your PIN number is 1234!"));
