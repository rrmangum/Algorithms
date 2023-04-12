const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// T - O(log n)
// S - O(1)
const binary = (val, arr) => {
  let lowerLimit = 0;
  let upperLimit = arr.length - 1;

  while (lowerLimit <= upperLimit) {
    console.log("try");
    const middleIndex = lowerLimit + Math.floor((upperLimit - lowerLimit) / 2);

    if (val === arr[middleIndex]) {
      return middleIndex;
    }
    if (val < arr[middleIndex]) {
      upperLimit = middleIndex - 1;
    } else {
      lowerLimit = middleIndex + 1;
    }
  }
  return "Value not found.";
};

console.log(binary(11, values));
