// Quick Sort

// Problem: Given an array of integers, sort the array.

const quickSort = (values) => {
  if (values.length < 2) {
    return values;
  }
  let pivotElement = values[values.length - 1];
  let leftArray = [];
  let rightArray = [];

  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] < pivotElement) {
      leftArray.push(values[i]);
    } else {
      rightArray.push(values[i]);
    }
  }
  return [...quickSort(leftArray), pivotElement, ...quickSort(rightArray)];
};

const values = [8, 20, -2, 4, -6];

console.log(quickSort(values)); // [-6, -2, 4, 8, 20]

// Worst Case - Time complexity: O(n^2) - Quadratic (trying the algorithm on an already sorted array)
// Average Coase - Time complexity: O(nlogn) - Logarithmic
// Space complexity: O(1) - Constant
