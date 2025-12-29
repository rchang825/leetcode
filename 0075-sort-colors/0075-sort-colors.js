/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    let mid = 0;
    while (mid <= right) {
        if (nums[mid] === 1) {
            mid++;
        } else if (nums[mid] === 0) {
            let temp = nums[left];
            nums[left] = nums[mid];
            nums[mid] = temp;
            left++;
            mid++;
        } else {
            let temp = nums[mid];
            nums[mid] = nums[right];
            nums[right] = temp;
            right--;
        }
    }
};