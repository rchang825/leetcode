/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // enqueue all rotten oranges (iterate through grid) with dist 0
    let q = [];
    let dist = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                q.push([[i, j], dist]);
                // console.log(i, j);
            }
        }
    }
    // bfs until board is cleared (all oranges rotten)
    while (q.length) {
        // dequeue rotten orange and delete it (0)
        let [[r, c], d] = q.shift();
        dist = d;
        grid[r][c] = 0;
        // enqueue all fresh orange neighbors with dist + 1 and set them to rotten (2)
        // up
        if (r > 0) {
            if (grid[r - 1][c] === 1) {
                grid[r - 1][c] = 2;
                q.push([[r - 1, c], d + 1]);
                // console.log(r - 1, c);
            }
        }
        // down
        if (r < grid.length - 1) {
            if (grid[r + 1][c] === 1) {
                grid[r + 1][c] = 2;
                q.push([[r + 1, c], d + 1]);
                // console.log(r + 1, c);
            }
        }
        // left
        if (c > 0) {
            if (grid[r][c - 1] === 1) {
                grid[r][c - 1] = 2;
                q.push([[r, c - 1], d + 1]);
                // console.log(r, c - 1);
            }
        }
        // right
        if (c < grid[0].length - 1) {
            if (grid[r][c + 1] === 1) {
                grid[r][c + 1] = 2;
                q.push([[r, c + 1], d + 1]);
                // console.log(r, c + 1);
            }
        }
    }
    // iterate through grid again to make sure it's cleared
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 0) {
                // console.log(i, j, 'is unreachable!');
                return -1;
            }
        }
    }
    // return dist
    return dist;
};