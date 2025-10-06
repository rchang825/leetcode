/**
 * @param {number} n
 * @return {number}
 */
    
var climbStairs = function(n) {
    let memo = {};
    memo[0] = 0;
    // base cases: 1 and 2
    memo[1] = 1;
    memo[2] = 2;
    return memoizeStairs(n, memo);
};
var memoizeStairs = function(count, memo) {
    let n = parseInt(count);
    if (memo.hasOwnProperty(n)) {
        return memo[n];
    }
    // all other cases will be climbStairs(n - 1) + climbStairs(n - 2);
    memo[n] = (memoizeStairs(n-1, memo) + memoizeStairs(n - 2, memo));
    return memo[n];
}