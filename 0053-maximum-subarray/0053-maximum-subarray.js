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
    let left = 0;
    let right = 0;
    // start from first element and sum
    while (left <= right && right < nums.length) {
        // update sum
        sum += nums[right];
        // update maxSum
        maxSum = Math.max(maxSum, sum);
        // if sum is negative
        if (sum < 0) {
            // start over
            // sum = 0
            sum = 0;
            // close left
            left++;
        } 
        // open window to right
        right++;
    }
    // return maxSum
    return maxSum;
};