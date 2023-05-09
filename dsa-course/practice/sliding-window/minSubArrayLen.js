// Write a function called minSubArrayLen which accepts two parameters
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead

// UNDERSTAND THE PROBLEM
// Restate: look for the smallest array possible where the sum of the array is greater than or equal to the target sum
// Inputs: array and number - array of strings? negative numbers? 0?
// Outputs: number that is the length of the array who's sum is greater than or equal to the target sum
// Enough: Addition, comparing arrays of different lengths, sliding window
// Label: func: minSubArrayLen, inputs: arr and targetSum, outputs: arrayLen, tempSum

// CONCRETE EXAMPLES
// Simple:
// See below
// Complex: minSubArrayLen([1,2,3,4,5,6,7,8,9,], 45) // 9
// Empty:
// minSubArrayLen([], 9); // 0
// Invalid:
// minSubArrayLen([12,3,4]); // 0

// BREAK IT DOWN
// declare variable to hold the tempSum for comparison to targetSum
// declare variable to hold length of returned array
// continue to add values from the array until end of array
// store that value in tempSum
// compare temp sum against targetSum - did we even reach the target sum?
// if not return 0
// once the sum of the array values is equal to or greater than the targetSum
// we don't need to go any further because anything being added on after that will be a longer returned array
// return arrayLen

// SOLVE/SIMPLIFY
function minSubArrayLen(arr, targetSum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < arr.length) {
    if (total < targetSum && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= targetSum) {
      minLen = Math.min(minLen, end - start);
      total -= arr[start];
      start++;
    } else break;
  }
  return minLen === Infinity ? 0 : minLen;
}

// Another implemenation
function minSubArrayLen(arr, targetSum) {
  let result = Infinity;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum >= targetSum) {
      result = Math.min(result, i - left + 1);
      sum -= arr[left++];
    }
  }
  return result === Infinity ? 0 : result;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
