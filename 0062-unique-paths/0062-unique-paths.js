/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let matrix = new Array(m).fill(new Array(n).fill(1));
    for (var r = 1; r < m; r++) {
        // let curr = new Array(n).fill(1);
        for (var c = 1; c < n; c++) {
            matrix[r][c] = matrix[r][c - 1] + matrix[r - 1][c];
        }
    }
    return matrix[m - 1][n - 1];
}
var uniquePathsBad = function(m, n, r = 0, c = 0) {
    // start from top left
    // base case: out of bounds, return 0;
    if (r > m) {
        return 0;
    }
    if (c > n) {
        return 0;
    }    
    // base case: at bottom right
    if (r === m - 1 && c === n - 1) {
        // return 1;
        return 1;
    }
    // recursive case:
    // recurse on down
    // recurse on right
    // return summation 
    return uniquePaths(m, n, r + 1, c) + uniquePaths(m, n, r, c + 1);
};