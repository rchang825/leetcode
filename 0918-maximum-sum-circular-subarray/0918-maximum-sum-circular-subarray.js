/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    // initialize maxSum and minSum = first number in nums
    let maxSum = nums[0]; 
    let minSum = nums[0];
    let currMaxSum = nums[0];
    let currMinSum = nums[0];
    let totalSum = nums[0];

    // iterate through starting from each n in nums for N elements (circular array)
    for (let i = 1; i < nums.length; i++) {
        // choose to extend or start new subarray based on max or min
        currMaxSum = Math.max(currMaxSum + nums[i], nums[i]);
        maxSum = Math.max(currMaxSum, maxSum);
        currMinSum = Math.min(currMinSum + nums[i], nums[i]);
        minSum = Math.min(currMinSum, minSum);

        // totalSum += curr
        totalSum += nums[i];
    }    

    // compare linear array vs circular array maxSum
    // circular array maxSum = totalSum - minSum
    let circMaxSum = totalSum - minSum;
    // if minSum = totalSum then all vals are negative
    // want to NOT return 0 here but rather the "least" negative which is recorded by maxSum
    if (circMaxSum === 0) { 
        circMaxSum = Number.MIN_SAFE_INTEGER;
    }
    return Math.max(maxSum, circMaxSum);
};