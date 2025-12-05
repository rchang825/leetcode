/**
 * @param {number[]} nums
 * @return {number}
 */
var countPartitions = function(nums) {
  // get total sum
  sum = nums.reduce((sum, num) => sum + num);
  // if sum is even
  if (sum % 2 === 0) {
    // return n - 1
    return nums.length - 1;
  }
  // return 0
  return 0;
}
var countPartitions1 = function(nums) {
    // get total sum
    let sum = 0;
    // define res
    let res = 0;
    nums.forEach((n) => sum += n);
    // loop through nums
    // accumulate currSum starting with at least one element on left side
    let currSum = nums[0];
    for (var i = 1; i < nums.length; i++) {
      currSum += nums[i];
      // if sum - currSum - (currSum) is even
      if ((sum - currSum - currSum) % 2 === 0) {
        // increment res
        res++;
      }
    }
    // return res
    return res;
};