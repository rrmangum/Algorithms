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
// function areThereDuplicates() {
// allow variable number of arguments
// frequency counter pattern
// create a lookup object to store keys and frequencies
// loop through the arguments and add them to the lookup object
// if object has they key already
// return true
// otherwise return false
// }

// SOLVE/SIMPLIFY
function areThereDuplicates() {
  if (arguments.length === 0) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < arguments.length; i++) {
    const currentArgument = arguments[i];
    if (lookup[currentArgument]) {
      return true;
    } else lookup[currentArgument] = 1;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
