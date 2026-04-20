/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSumBrute = function(grid) {
    // declare best as pos infinity
    let best = Infinity;
    const M = grid.length;
    const N = grid[0].length;
    var move = function(r, c, currSum) {
        // if OoB:
        if (r === M || c === N) {
            // return
            return;
        }
        // currSum += grid[r][c]
        currSum += grid[r][c];
        // if at end:
        if (r === M - 1 && c === N - 1) {
            // best = min(best, currSum)
            best = Math.min(best, currSum);
            // return
            return;
        }
        // move(down)
        move(r + 1, c, currSum);
        // move(right)
        move(r, c + 1, currSum)
    }
    // call move(0,0)
    move(0, 0, 0);
    // return best
    return best;
};

var minPathSum = function(grid) {
    // declare best as pos infinity
    let best = Infinity;
    const M = grid.length;
    const N = grid[0].length;
    // best at 0,0 is 0,0
    // best of first row = left + curr
    for (let i = 1; i < N; i++) {
        grid[0][i] += grid[0][i - 1];
    }
    // best of first col = up + curr
    for (let j = 1; j < M; j++) {
        grid[j][0] += grid[j - 1][0];
    }
    // console.log('grid', grid);
    // best at diagonal = min(best at left, best at up) + curr
    for (let r = 1; r < M; r++) {
        for (let c = 1; c < N; c++) {
            // console.log('r', r, 'c', c);
            grid[r][c] += Math.min(grid[r - 1][c], grid[r][c - 1]);
        }
    }
    // return best at M-1, N-1
    return grid[M - 1][N - 1];
};