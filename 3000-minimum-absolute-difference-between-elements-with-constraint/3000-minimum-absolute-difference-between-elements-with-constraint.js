/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minAbsoluteDifference = function(nums, x) {
    let min = Number.POSITIVE_INFINITY;
    for (var i = 0; i < (nums.length - x); i++) {
        for (let j = i + x; j < nums.length; j++) {
            min = Math.min(Math.abs(nums[i] - nums[j]), min);
        }
    }
    return min;
};