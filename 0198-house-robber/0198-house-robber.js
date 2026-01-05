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
    const maxProfit = new Array(nums.length + 1);
    maxProfit[nums.length] = 0;
    maxProfit[nums.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        maxProfit[i] = Math.max(maxProfit[i + 1], nums[i] + maxProfit[i + 2]);
    }
    return maxProfit[0];
};