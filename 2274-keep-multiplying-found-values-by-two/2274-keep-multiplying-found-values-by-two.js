/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    return nums.includes(original) ? findFinalValue(nums, original * 2) : original;
};