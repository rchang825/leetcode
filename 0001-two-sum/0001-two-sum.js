/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let counts = {};
    for (var i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (counts.hasOwnProperty(complement)) {
            return [i, counts[complement]];
        }
        counts[nums[i]] = i;
    }
    return [];
};