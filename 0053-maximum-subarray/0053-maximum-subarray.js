/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    // maxSum and currSum
    let maxSum = nums[0];
    let left = 0;
    let right = 1;
    let currSum = nums[0];
    // iterate through nums
    while (right < nums.length && left <= right) {
        if (currSum < 0) {
            // restart (close window)
            currSum = 0;
            left = right;
        }
        currSum += nums[right];
        // always open window to right 
        right++;
        //update maxSum when necessary
        maxSum = Math.max(currSum, maxSum);
    }
    // return maxSum at end
    return maxSum;
};