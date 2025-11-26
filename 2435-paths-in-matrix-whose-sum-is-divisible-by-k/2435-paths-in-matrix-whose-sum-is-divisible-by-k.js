/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var numberOfPathsTLE = function(grid, k) {
    // initialize numPaths = 0
    let numPaths = 0;
    let m = grid.length;
    let n = grid[0].length;
    // find a path with a helper(currSum, r, c)
    var helper = function(currSum, r, c) {
        // base case: r or c is out of bounds
        if (r >= m || c >= n) {
            return;
        }
        // update currSum
        currSum += grid[r][c];
        currSum %= k;
        // base case: r,c is at bottom right
        if (r === m - 1 && c === n - 1) {
            // add 1 to numPaths if sum % k = 0
            if (currSum === 0) {
                numPaths++;
                numPaths %= (10**9 + 7);
            }
        } else {
        // otherwise:
            // recurse on currSum, down
            helper(currSum, r + 1, c);
            // recurse on currSum, right
            helper(currSum, r, c + 1);
        }
    }
    // call helper(0, 0, 0)
    helper(0, 0, 0);
    // return numPaths
    return numPaths;
};
var numberOfPaths = function(grid, k) {
    let m = grid.length;
    let n = grid[0].length;
    // set up a memo array
    let memo = [];
    // console.log(memo);
    for (var i = 0; i <= m; i++) {
        memo[i] = [];
        for (var j = 0; j <= n; j++) {
            memo[i][j] = new Array(k).fill(0);
            // initialize top left value which only has one possible remainder
            if (i === 1 && j === 1) {
                memo[i][j][grid[0][0] % k] = 1;
            } else {
                if (i >= 1 && j >= 1) {
                    let remainder = grid[i - 1][j - 1] % k;
                    for (var r = 0; r < k; r++) {
                        const prevRemainder = (r - remainder + k) % k;
                        // up
                        memo[i][j][r] += memo[i - 1][j][prevRemainder];
                        //left
                        memo[i][j][r] += memo[i][j - 1][prevRemainder];
                        // prevent overflow
                        memo[i][j][r] %= 10 ** 9 + 7;
                    }
                }
            }
        }
    }
    // return memo[bottom][right][0]
    return memo[m][n][0];
};