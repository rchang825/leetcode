/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, l = 0, r = nums.length - 1) {
    // base case: single element -> peak
    if (l === r) {
        return l;
    }
    // midpoint
    let midIndex = Math.floor((l + r) / 2);
    let midpoint = nums[midIndex];
    let next = nums[midIndex + 1];
    // otherwise, decide which half to accept (greater or default right)
    if (next > midpoint) {
        return findPeakElement(nums, midIndex + 1, r);
    } else {
        return findPeakElement(nums, l, midIndex);
    }
};