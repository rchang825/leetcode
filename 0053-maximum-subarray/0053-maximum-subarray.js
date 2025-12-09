/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // sliding window
    // define sum
    let sum = 0;
    // edge case: only negative subarrays in nums
    // initialize maxSum with max negative value
    let maxSum = Number.NEGATIVE_INFINITY;
    // consider every single number
    for (var i = 0; i < nums.length; i++) {
        // update sum
        sum += nums[i];
        // update maxSum
        maxSum = Math.max(maxSum, sum);
        // if sum is negative
        if (sum < 0) {
            // start over with a new subarray sum
            // sum = 0
            sum = 0;
        } 
    }
    // return maxSum
    return maxSum;
};