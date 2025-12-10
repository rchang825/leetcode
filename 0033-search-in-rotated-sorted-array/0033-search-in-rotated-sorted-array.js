/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // modified binary search
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right - left) / 2) + left;
        if (target === nums[mid]) {
            return mid;
        }
        // if mid < right
            // right is sorted
        // if left < mid
            // left is sorted
        let leftSorted = nums[left] <= nums[mid];
        // one half is guaranteed to be sorted (even if array is rotated)
        // if left half is not sorted, that means the right half is
        if (leftSorted) {
            // if target lies within nums[left] and nums[mid], proceed with normal binary search on left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                // otherwise, throw left half away
                left = mid + 1;
            }
        } else {
            // if target lies within nums[mid] and nums[right], proceed with normal binary search on right half
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                // otherwise, throw right half away
                right = mid - 1;
            }
        }
    }
    return -1;
};