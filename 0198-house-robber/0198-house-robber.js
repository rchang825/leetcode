/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /*
        running maxProfit array
        p[0] = n[0] (rob)
        p[1] = n[1] (rob)
        p[2] = p[0] + n[2] (rob) OR p[1] (don't rob)
        p[3] = p[1] + n[2] (rob) OR p[2] (don't rob)
    */
    // edge cases
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }
    const maxProfit = new Array(nums.length);
    maxProfit[0] = nums[0];
    maxProfit[1] = nums[1];
    maxProfit[2] = nums[0] + nums[2];
    for (let i = 3; i < nums.length; i++) {
        maxProfit[i] = nums[i] + Math.max(maxProfit[i - 2], maxProfit[i - 3]);
    }
    return Math.max(...maxProfit);
};