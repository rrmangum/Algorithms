// Write a function called averagePair. Given a sorted array of
// integers and a target average, determine if there is a pair of
// values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// UNDERSTAND THE PROBLEM
// Restate - compare values in the array to find a specific average value that
// is provided as an argument to the function
// Inputs - sorted array and a number, empty array? array of strings that are numbers? special characters? negative numbers?
// Outputs - boolean
// Enough - Yes since the array is sorted already we can continue with finding the average pair.
// We are not concerned with whether there are multiple pairs, once we find the pair return true.
// Label - func: averagePair, input: arr and target, output: result, pointers: left and right

// CONCRETE EXAMPLES
// Simple:
// averagePair([1, 2, 3], 2.5) // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) // false
// Complex:
// averagePair(["1", "2", "3"], 2.5) // true
// averagePair([-1, -2, -3], -2.5) // true
// Empty:
// averagePair([], 4) // false
// Invalid?:
// averagePair([1, 2, 3, !], 2.5) // true?

// BREAK IT DOWN
// function averagePair(arr, target) {
// declare pointers
// while right is greater than left
// compare pointers
// if average of pointers equals the target return true
// if average of pointers DOES NOT equal the target
// compare the target average with the calculated average
// if the calculated average is higher than the target average
// decrement the right pointer
// if the calculated average is lower than the target average
// increment the left pointer
// return false
// }

//SOLVE/SIMPLIFY
function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === target) {
      return true;
    } else if (avg < target) {
      left++;
    } else right--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
