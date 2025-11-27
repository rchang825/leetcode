/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPaths = function(grid, k) {
    // define constants
    let M = grid.length;
    let N = grid[0].length;
    let MOD = 10 ** 9 + 7;
    // define memo array
    let memo = new Array(M + 1).fill().map(el => new Array(N + 1).fill().map(elem => new Array(k).fill(-1)));

    // helper(row, col, remainder)
    var helper = function(r, c, rem) {
        // base case: row or col out of bounds
        if (r >= M || c >= N) {
            // return 0
            return 0;
        }
        // base case: at bottom right
        if (r === M - 1 && c === N - 1) {
            // return if the remainder is 0 (valid path)
            return (rem + grid[r][c]) % k === 0 ? 1 : 0;
        }
        // return memoized result if applicable
        if (memo[r][c][rem] !== -1) {
            return memo[r][c][rem];
        }
        // recurse on down
        let down = helper(r + 1, c, (rem + grid[r][c]) % k);
        // recurse on right
        let right = helper(r, c + 1, (rem + grid[r][c]) % k);
        memo[r][c][rem] = (down + right) % MOD;
        return memo[r][c][rem];
    };
    // call helper with top left element and remainder of 0
    return helper(0, 0, 0);
};