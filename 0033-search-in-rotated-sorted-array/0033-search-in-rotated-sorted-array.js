/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) { // not sorted
            if (nums[mid] < target || target <= nums[right]) { // target in left half
                left = mid + 1; 
            } else { // target not in right half
                right = mid;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) { // target in right half, sorted
                left = mid + 1;
            } else { // target not in right half
                right = mid;
            }
        }
    }
    if (left === right) {
        if (target === nums[left]) {
            return left;
        }
        return -1;
    }
};