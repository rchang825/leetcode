/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    /*
    2,1 = 1
    2,2 = 2
    2,3 = 3
    2,4 = 4
    if either m or n = 2, paths = non-2 arg

    m and n are interchangeable
    for m = 3
    n = 1: 1
    n = 2: 3 = 1 + 2
    n = 3: 6 = 3 + 3
    n = 4: 10 = 6 + 4
    n = 5: 15 = 10 + 5
    n = 6: 21 = 15 + 6
    n = 7: 28 = 21 + 7
    A(n) = A(n - 1) + n ?
    
    for m = 4
    n = 1: 1
    2: 4
    3: 10 = 4 + 6
    4: 20 = 10 + 10
    5: 35 = 20 + 15
    6: 56 = 35 + 21
    7: 84 = 56 + 28
    A(n) = A(m, n - 1) + A(m - 1, n)
    */
    const paths = new Array(m).fill(0).map(() => new Array(n).fill(1));
    
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            paths[r][c] = paths[r - 1][c] + paths[r][c - 1];
        }
    }
    
    return paths[m - 1][n - 1];
};

var uniquePathsA = function(m, n) {
    // helper
    var findPaths = function(r, c) {
        // if out of bounds
        if (r < 0 || r >= m || c < 0 || c >= n) {
            // return
            return 0;
        }
        // if at bottom right
        if (r === m - 1 && c === n - 1) {
            // increment paths by 1
            return 1;
        }
        // recurse with path + down
        let downPath = findPaths(r + 1, c);
        // recurse with path + right
        let rightPath = findPaths(r, c + 1);
        return downPath + rightPath;
    }
    // start with path of top left
    // return paths
    return findPaths(0, 0);
};