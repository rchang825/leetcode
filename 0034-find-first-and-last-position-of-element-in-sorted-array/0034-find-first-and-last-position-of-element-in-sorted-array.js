/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var binarySearch = function(nums, target, l, r, seen) {
    if (l > r) {
        return -1;
    }
    let midIndex = Math.floor((l + r) / 2);
    let midpoint = nums[midIndex];
    if (midpoint === target) {
        if (seen) { // looking for right range
            if (midIndex === nums.length - 1 || nums[midIndex + 1] !== target) {
                return midIndex;
            }
            return binarySearch(nums, target, midIndex + 1, r, seen);
        } else { // left range
            if (midIndex === 0 || nums[midIndex - 1] !== target) {
                return midIndex;
            }
            return binarySearch(nums, target, l, midIndex - 1, seen);
        }
    } else if (midpoint < target) {
        return binarySearch(nums, target, midIndex + 1, r, seen);
    } else {
        return binarySearch(nums, target, l, midIndex - 1, seen);
    }
}
var searchRange = function(nums, target) {
    if (!nums.length) {
        return [-1,-1];
    }
    // find left and right range with binary search
    let left = binarySearch(nums, target, 0, nums.length - 1, false);
    if (left === -1) {
        return [-1,-1];
    }
    let right = binarySearch(nums, target, 0, nums.length - 1, true);
    return [left, right];
};