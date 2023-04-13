// Bubble Sort

// Problem: Given an array of integers, sort the array.

const bubbleSort = (values) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] > values[i + 1]) {
        let temp = values[i];
        values[i] = values[i + 1];
        values[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const values = [8, 20, -2, 4, -6];

bubbleSort(values);

console.log(values); // [-6, -2, 4, 8, 20]

// Time complexity: O(n^2) - Quadratic
// Space complexity: O(1) - Constant
