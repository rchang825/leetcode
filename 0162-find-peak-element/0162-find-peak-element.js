/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, l = 0, r = nums.length - 1) {
    // calculate mid index
    const midIndex = Math.floor((r + l) / 2);
    const mid = nums[midIndex];
    const leftOfMid = midIndex - 1 < 0 ? Number.NEGATIVE_INFINITY : nums[midIndex - 1];
    const rightOfMid = midIndex + 1 === nums.length ? Number.NEGATIVE_INFINITY : nums[midIndex + 1];
    // check for peak-ness: mid - 1 < mid < mid + 1
    // if peak
    if (leftOfMid < mid && mid > rightOfMid) {
        // return mid index
        return midIndex;
    }
    // otherwise
        // iterate on "most likely" side
        // if mid - 1 > mid, iterate on left
    if (leftOfMid > mid) {
        return findPeakElement(nums, 0, midIndex);
    } else {
        // if mid + 1 > mid, iterate on right
        return findPeakElement(nums, midIndex + 1, r);
    }
};