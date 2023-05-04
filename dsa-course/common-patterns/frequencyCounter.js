// uses objects or sets to collect values/frequencies of values
// avoids the need for nested loops or quadratic operations with arrays/strings
// useful to compare two array/string inputs

// Write a function called same, which accepts two arrays. The function should return true
// if every value in the array has its corresponding value squared in the second array. The
// frequency of values must be the same

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2);
//     if (correctIndex === -1) {
//       return false;
//     }
//     console.log(arr2);
//     arr2.splice(correctIndex, 1);
//   }
//   return true;
// }

// Refactor
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    // check keys
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // check values
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 3, 2], [1, 2, 3, 2]));
console.log(same([2, 2, 2, 2], [4, 4, 4, 4]));
