// Linear Search

// Problem: Given an array of n elements and a target element t, find the index of t in the array.
// Return -1 if the target element is not found.

const linearSearch = (values, target) => {
  for (let i = 0; i < values.length; i++) {
    if (values[i] === target) {
      return i;
    }
  }
  return -1;
};

const values = [-5, 2, 10, 4, 6];

console.log(linearSearch(values, 10)); // 2
console.log(linearSearch(values, 6)); // 4
console.log(linearSearch(values, 20)); // -1

// Time complexity: O(n) - Linear
// Space complexity: O(1) - Constant
