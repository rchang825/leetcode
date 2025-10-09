/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // incomplete frequency map
    // return true as soon as frequency = 2 at any point
    let counts = {};
    let i = 0;
    while (i < nums.length) {
        if (counts[nums[i]] === 1) {
            return true;
        } else {
            counts[nums[i]] = 1;
        }
        i++;
    }
    return false;
};