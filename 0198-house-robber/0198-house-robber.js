/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    /*
    max profit = rob current house + max profit(two houses ago) OR max profit of one house ago
    either rob or don't rob
    [1,6,4] max profit is 6
    max profit[0] is to rob current house for 1 money
    max profit[1] is max(rob current house, max profit[i - 1]) = max(6, 1) = 6
    0 and 1 are set (rob 0 at 0, rob 0 or 1 at 1 always)
    max profit[2] is max(rob curr + max profit[i - 2], max profit[i - 1]) = max(5, 6) = 6
    return max profit[n] = 6
    */
    const mp = new Array(nums.length);
    mp[0] = nums[0];
    mp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        mp[i] = Math.max(nums[i] + mp[i - 2], mp[i - 1]);
    }
    
    return mp[nums.length - 1];
};