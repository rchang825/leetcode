/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // [0, 1, 2, 4, 5, 6, 7]
    // [4, 5, 6, 7, 0, 1, 2] target = 0
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        if (nums[mid] <= nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    // if (nums[left] === target) {
    //     return left;
    // }
    return -1;
};
