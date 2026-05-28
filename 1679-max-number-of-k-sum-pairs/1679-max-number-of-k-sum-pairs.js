/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    let ops = 0;
    nums.sort((a, b) => a - b);
    let rightLimit = nums.length - 1;
    while (nums[rightLimit] > k && rightLimit > 0) {
        rightLimit--;
    }
    // console.log(nums);
    let left = 0;
    let right = rightLimit;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === k) {
            ops++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    return ops;
};