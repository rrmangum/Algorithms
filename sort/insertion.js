// Insertion Sort

// Problem: Given an array of integers, sort the array.

const insertionSort = (values) => {
  for (let i = 1; i < values.length; i++) {
    let numberToInsert = values[i];
    let j = i - 1;
    while (j >= 0 && values[j] > numberToInsert) {
      values[j + 1] = values[j];
      j = j - 1;
    }
    values[j + 1] = numberToInsert;
  }
};

const values = [8, 20, -2, 4, -6];

insertionSort(values);

console.log(values); // [-6, -2, 4, 8, 20]

// Time complexity: O(n^2) - Quadratic
// Space complexity: O(1) - Constant
