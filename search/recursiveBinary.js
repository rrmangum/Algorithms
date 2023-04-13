// Recursive Binary Search

// Problem: Given a sorted array of n elements and a target element t, find the index of t
// in the array. Return -1 if the target element is not found.

const recursiveBinarySearch = (values, target) => {
  return search(values, target, 0, values.length - 1);
};

const search = (values, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === values[middleIndex]) {
    return middleIndex;
  }
  if (target < values[middleIndex]) {
    return search(values, target, leftIndex, middleIndex - 1);
  } else {
    return search(values, target, middleIndex + 1, rightIndex);
  }
};

const values = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(values, 10)); // 4
console.log(recursiveBinarySearch(values, 6)); // 3
console.log(recursiveBinarySearch(values, 20)); // -1

// Time complexity: O(logn) - Logarithmic
// Space complexity: O(1) - Constant
