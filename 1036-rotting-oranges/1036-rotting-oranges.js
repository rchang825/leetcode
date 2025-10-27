/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    // define queue of current rotten oranges
    let rotten = [];
    // helper function that rots adjacent oranges
    var rot = function(r, c, minute) {
        // check if within grid
        // only rot if orange exists
        if (r > 0) {
            if (grid[r - 1][c] === 1) {
                grid[r - 1][c] = 2;
                rotten.push([r - 1, c, minute + 1]);
            }
        }
        if (r < grid.length - 1) {
            if (grid[r + 1][c] === 1) {
                grid[r + 1][c] = 2;
                rotten.push([r + 1, c, minute + 1]);
            }
        }
        if (c > 0) {
            if (grid[r][c - 1] === 1) {
                grid[r][c - 1] = 2;
                rotten.push([r, c - 1, minute + 1]);
            }
        }
        if (c < grid[r].length - 1) {
            if (grid[r][c + 1] === 1) {
                grid[r][c + 1] = 2;
                rotten.push([r, c + 1, minute + 1]);
            }
        }
    }
    
    // iterate through grid
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            // if rotten orange
            if (grid[r][c] === 2) {
                // push onto queue
                rotten.push([r, c, 0]);
            }
        }
    }
    let count = 0;
    // while queue is not empty
    while (rotten.length > 0) {
        // dequeue and rot
        [r, c, count] = rotten.shift();
        rot(r, c, count);
    }
    // check that all oranges are now rotten
    // iterate through grid again
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            // if fresh orange
            if (grid[r][c] === 1) {
                // push onto queue
                rotten.push(0);
            }
        }
    }
    // if queue is not empty
    if (rotten.length !== 0) {
        // return -1 (impossible to rot all oranges)
        return -1;
    }
    // return counter
    return count;
};