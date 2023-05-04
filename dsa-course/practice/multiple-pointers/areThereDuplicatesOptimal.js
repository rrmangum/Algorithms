// Implement a function called, areThereDuplicates which accepts a
// variable number of arguments, and checks whether there are any
// duplicates among the arguments passed in. You can solve this
// using the frequency counter pattern OR the multiple pointers pattern.

// UNDERSTAND THE PROBLEM
// -Restate: take in an unknown number of arguments and types and compare them for duplicates then return true or false is duplicates exist
// -Inputs: Numbers, Strings, arrays? objects?, numbers and strings?
// -Outputs: boolean
// -Enough: If we only care about numbers and strings yes, if more data types, maybe no
// -Label: func: areThereDuplicates inputs: variable amount of numbers or strings

// CONCRETE EXAMPLES
// -Simple:
// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') //true
// -Complex:
// areThereDuplicates(1, '2', 2) // true? false?
// areThereDuplicates([1,2,3], [1,2,3], [4,5,6]) // true?
// areThereDuplicates({a: 1}, {a: 1}) // true?
// areThereDuplicates({a: 2}, {a: 1}) // false?
// -Empty:
// areThereDuplicates() // false
// areThereDuplicates({}, {}) // false
// areThereDuplicates([], []]) // false
// -Invalid:
// areThereDuplicates(arrays?) // ?
// areThereDuplicates(objects?) // ?

// BREAK IT DOWN
// create a set (array-like object containing the arguments passed to the function)
// a set is a collection of unique values.
// Duplicates in the original array will automatically removed
// compare the size of the set to the arguments length
// if the sizes are not the same then we know some duplicates were removed.
// return the boolean result
// }

// SOLVE/SIMPLIFY
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(6, 9, 3)); // false
console.log(areThereDuplicates(6, 9, 3, 9)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
