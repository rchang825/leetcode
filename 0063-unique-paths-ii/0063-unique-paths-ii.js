/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    // destination = bottom right
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // build from left to right
    // initialize first cell to be either 1 or 0 if obstacle
    if (obstacleGrid[0][0]) {
        return 0;
    }
    obstacleGrid[0][0] = 1;
    for (let j = 1; j < n; j++) {
        // if not an obstacle, = same as left
        obstacleGrid[0][j] = obstacleGrid[0][j] ? 0 : obstacleGrid[0][j - 1];
    }
    
    // build from top to bottom
    for (let i = 1; i < m; i++) {
        // if not an obstacle, = same as above
        obstacleGrid[i][0] = obstacleGrid[i][0] ? 0 : obstacleGrid[i - 1][0];
    }

    // sum of paths to point = paths to left and paths above
    // build full grid
    for (let r = 1; r < m; r++) {
        for (let c = 1; c < n; c++) {
            // if obstacle, set to 0
            if (obstacleGrid[r][c]) {
                obstacleGrid[r][c] = 0;
            } else {
                obstacleGrid[r][c] = obstacleGrid[r][c - 1] + obstacleGrid[r - 1][c];
            }
        }
    }

    
    // return number of paths at bottom right
    return obstacleGrid[m - 1][n - 1];
};