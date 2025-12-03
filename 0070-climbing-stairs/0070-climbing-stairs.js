/**
 * @param {number} n
 * @return {number}
 */
var helper = function(count, memo) {
    if (memo[count]) {
        return memo[count];
    }
    memo[count] = helper(count - 1, memo) + helper(count - 2, memo);
    return memo[count];
}
var climbStairs = function(n) {
    let memo = [0, 1, 2];
    return helper(n, memo);
};