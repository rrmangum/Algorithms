/**
 * @param {string} s
 * @return {boolean}
 */
const pairs = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  if (s[0] === "]" || s[0] === ")" || s[0] === "}") {
    return false;
  }

  if (
    s[s.length - 1] === "[" ||
    s[s.length - 1] === "(" ||
    s[s.length - 1] === "{"
  ) {
    return false;
  }

  let stack = [];
};
