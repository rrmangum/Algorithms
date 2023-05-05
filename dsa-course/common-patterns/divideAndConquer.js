// Dividing a data set into smaller chunks and then repeating a process with a subset
// of data.

// This pattern can tremendously decrease time complexity (Binary Search is a good example)

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (target === arr[middle]) return middle;
    else if (target > arr[middle]) left = middle + 1;
    else right = middle - 1;
  }
  return -1;
}
