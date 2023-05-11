// Time Complexity - O(n log n)
// Space Complexity - O(n)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// Both arrays must be sorted in the same manner
function merge(arr1, arr2) {
  let sortedArray = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      sortedArray.push(arr1[i]);
      i++;
    } else {
      sortedArray.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    sortedArray.push(arr1[i]);
    i++;
  }
  while (j < arr1.length) {
    sortedArray.push(arr2[j]);
    j++;
  }
  return sortedArray;
}

console.log(mergeSort([1, 7, 3, 5]));
