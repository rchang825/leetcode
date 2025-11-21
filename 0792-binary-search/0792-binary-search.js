/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    // while target not found and the range to search is valid
    while (left <= right) {
        // find middle number
        let mid = Math.floor((right - left) / 2) + left;
        // if target matches middle, return middle index (found!)
        if (nums[mid] === target) {
            return mid;
        }
        // if target > middle, move right (close left range)
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // if target < middle, move left (close right range)
            right = mid - 1;
        }
    }
    // return -1
    return -1;
};