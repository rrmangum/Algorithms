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
// check if the length is 0 if it is return false
// sort the array
// create a starting pointer, 0
// create a next pointer, 1
// loop through the arguments while the next pointer is less than arguments.length
// check if the start pointer equals the next pointer
// if it does, return true
// increment start and next
// return false at the end
// }

// SOLVE/SIMPLIFY
function areThereDuplicates(...args) {
  if (arguments.length === 0) {
    return false;
  }
  args.sort();
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(6, 9, 3)); // false
console.log(areThereDuplicates(6, 9, 3, 9)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
