/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // get sum of first k elements with range of left to right
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }
    let maxSum = currSum;
    let left = 0;
    let right = k;
    // while right is within bounds of nums
    while (right < nums.length) {
        // consider new sum (sum - old left + new right)
        currSum += nums[right++] - nums[left++];
        maxSum = Math.max(maxSum, currSum);
    }
    // return maxSum / k
    return maxSum / k;
};