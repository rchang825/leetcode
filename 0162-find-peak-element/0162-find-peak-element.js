/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, l = 0, r = nums.length) {
    // midpoint
    let midIndex = Math.floor((l + r - 1) / 2);
    let midpoint = nums[midIndex];
    let prev = midIndex === 0 ? Number.NEGATIVE_INFINITY : nums[midIndex - 1];
    let next = midIndex + 1 < nums.length ? nums[midIndex + 1] : Number.NEGATIVE_INFINITY;
    // base case: midpoint is peak
    if (prev < midpoint && midpoint > next) {
        // return midIndex
        return midIndex;
    }
    // otherwise, decide which half to accept (greater)
    if (next > midpoint) {
        return findPeakElement(nums, midIndex + 1, r);
    } else {
        return findPeakElement(nums, l, midIndex + 1);
    }
};