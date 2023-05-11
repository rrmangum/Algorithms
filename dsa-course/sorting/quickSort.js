// Time Complexity - O(n log n) Except worst case - O(n^2)
// Space Complexity - O(1)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// partition/pivot helper
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let finalPosition = start;

  function swap(array, i, j) {
    // let temp = array[i];
    // array[i] = array[j];
    // array[j] = temp;
    [array[i], array[j]] = [array[j], array[i]];
  }

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      finalPosition++;
      swap(arr, finalPosition, i);
    }
  }
  swap(arr, start, finalPosition);
  return finalPosition;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
