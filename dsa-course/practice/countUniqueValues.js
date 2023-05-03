// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers
// in the array, but it will always be sorted.

// UNDERSTAND THE PROBLEM
// -Restate: search a sorted array for unique values and return those values
// -Inputs: array of numbers with multiple values that are either unique or not
//  what about special characters? array of strings?
// -Outputs: Number as the count of the unique vales in the array
// -Enough: Assume the return is only one number based on the input having one unique value
// -Label: func: countUniqueValues, input: arr, output: count

// CONCRETE EXAMPLES
// -simple: [1, 1, 1, 1, 2] // 1
// -complex: [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13] // 4
//           ['1', '2', '2', '4'] // 2
// -empty: [] // 0
// -invalid: {}, 4 // invalid input

//BREAK IT DOWN
// function countUniqueValues(arr) {
// create a variable to hold the count of unique values
// loop through the array for the first value
// nested loop through the array for the second value
// compare first value to second value
// if they are the same value do nothing
// if they are different add one to the count
// return the count
// }

// SOLVE / SIMPLIFY;
// function countUniqueValues(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let isUnique = true;
//     for (let j = 0; j < i; j++) {
//       if (arr[i] === arr[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       count++;
//     }
//   }
//   return count;
// }

// REFACTOR - great approach when you can alter the array
function countUniqueValues(arr) {
  // create two variables to hold the comparison amounts
  // start at 0 and 1
  // loop through and compare i and j if they are the same then increment j and leave i where it is
  // if i and j are different then move i forward and put the index position of i in the array at that index position.
  // use the array to hold our count to minimize necessary memory.
  // move j forward
  // use the index position of i + 1 for the final count.
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
