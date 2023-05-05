// Helpful when trying to compile a result, usually an array or some other data structure

// Pattern
function outer(input) {
  let outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}

// Helper Method Example
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // base case
    if (helperInput.length === 0) {
      return;
    }
    // condition
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // smaller data
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

// Pure Recursion
function collectOddValuesPure(arr) {
  let newArr = [];

  // base case
  if (arr.length === 0) {
    return newArr;
  }
  //condition
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
