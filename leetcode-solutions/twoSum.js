/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // let myObj = {};

  // for (let i = 0; i < nums.length; i++) {
  //     if (myObj[nums[i]] !== undefined) {
  //         return [i, myObj[nums[i]]];
  //     } else {
  //         myObj[target - nums[i]] = i;
  //     }
  // }

  // Efficient
  // T - O(n) Linear
  // S - O(n) Linear

  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    let complementPair = target - value;
    if (map[complementPair] !== undefined) {
      return [map[complementPair], i];
    } else {
      map[value] = i;
    }
  }

  // Brute Force
  // T - O(n^2) Quadratic
  // S - O(1) Constant

  //    let myObj = {};

  //    for (var i = 0; i < nums.length; i++) {
  //        for (var j = i + 1; j < nums.length; j++) {
  //            if (nums[i] + nums[j] == target) {
  //                return [i, j];
  //            }
  //        }
  //    }
};
