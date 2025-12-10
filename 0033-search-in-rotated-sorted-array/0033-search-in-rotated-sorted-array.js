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
        let rightSorted = nums[mid] <= nums[right];
        // if left < mid
            // left is sorted
        let leftSorted = nums[left] <= nums[mid];
        if (leftSorted) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            
        } 
        if (rightSorted) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
};