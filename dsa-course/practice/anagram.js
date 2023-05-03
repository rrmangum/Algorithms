// Given two strings, write a function to determine if the second string is an anagram
// of the first. An anagram is a word, phrase, or name formed by rearranging the
// letters of another, such as cinema formed from iceman

// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let object1 = {};
//   let object2 = {};

//   for (let val of str1) {
//     object1[val] = (object1[val] || 0) + 1;
//   }
//   for (let val of str2) {
//     object2[val] = (object2[val] || 0) + 1;
//   }
//   for (let key in object1) {
//     if (!key in object2) {
//       return false;
//     }
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// Refactor
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let letter of first) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let letter of second) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("", "")); //true
console.log(validAnagram("aaz", "zza")); //false
console.log(validAnagram("anagram", "nagaram")); //true
console.log(validAnagram("rat", "car")); //false
console.log(validAnagram("awesome", "awesom")); //false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); //false
console.log(validAnagram("qwerty", "qeywrt")); //true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true
