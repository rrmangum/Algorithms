// Binary Search

// Problem: Given a sorted array of n elements and a target element t, find the index of t
// in the array. Return -1 if the target element is not found.

const binarySearch = (values, target) => {
  let leftIndex = 0;
  let rightIndex = values.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === values[middleIndex]) {
      return middleIndex;
    }
    if (target < values[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

const values = [-5, 2, 4, 6, 10];

console.log(binarySearch(values, 10)); // 4
console.log(binarySearch(values, 6)); // 3
console.log(binarySearch(values, 20)); // -1

// Time complexity: O(logn) - Logarithmic
// Space complexity: O(1) - Constant
