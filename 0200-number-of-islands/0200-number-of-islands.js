/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // iterate through grid left to right, top to bottom
    // encountering 1:
        // find all adjacent 1s (right and down recursively) and convert to 0s
        // increment counter
    let count = 0;

    var exploreIsland = function(r, c) {
        // console.log('r', r, 'c', c);
        if (r >= 0 && r < grid.length) {
            if (c >= 0 && c < grid[r].length) {
                if (grid[r][c] === '1') {
                    grid[r][c] = '0';
                    // console.log(grid);
                    exploreIsland(r - 1, c);
                    exploreIsland(r + 1, c);
                    exploreIsland(r, c + 1);
                    exploreIsland(r, c - 1);
                } 
            }
        }
        
    };
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                // console.log('island found starting at', r, ',', c);
                exploreIsland(r, c);
                count++;
            }
        }
    }
    return count;
};