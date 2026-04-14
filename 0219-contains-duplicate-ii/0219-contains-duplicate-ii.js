/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let left = 0;
    let right = 1;
    if (k === 0) {
        return false;
    }
    while (left < nums.length - 1) {
        if (nums[left] === nums[right]) {
            return true;
        }
        if ((right - left < k) && right < nums.length - 1) {
            right++;
        } else {
            left++;
            right = left + 1;
        }
    }
    return false;
};