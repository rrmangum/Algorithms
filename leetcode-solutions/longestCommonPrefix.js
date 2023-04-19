/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  if (strs.length === 0) {
    return prefix;
  }

  for (let i = 0; i < strs[0].length; i++) {
    const character = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== character) {
        return prefix;
      }
    }
    prefix = prefix + character;
  }
  return prefix;

  // Time complexity: O(n^2) - Quadratic
  // Space complexity: O(1) - Constant
};
