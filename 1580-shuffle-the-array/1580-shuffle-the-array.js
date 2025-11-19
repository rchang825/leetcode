/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    // n is start of y
    let y = n;
    let ans = [];
    for (var x = 0; x < n; x++, y++) {
        ans.push(nums[x]);
        ans.push(nums[y]);
    }
    return ans;
};