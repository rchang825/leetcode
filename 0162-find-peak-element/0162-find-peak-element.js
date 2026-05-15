/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // iterate through nums
    for (let i = 0; i < nums.length; i++) {
        // prev = nums[i - 1] or negative inf
        let prev = i === 0 ? Number.NEGATIVE_INFINITY : nums[i - 1];
        // next = nums[i + 1] or negative inf
        let next = i === nums.length - 1 ? Number.NEGATIVE_INFINITY : nums[i + 1];
        let curr = nums[i];
        // at each point, if prev < curr > next, return index of curr
        if (prev < curr && curr > next) {
            return i;
        }
    }
};