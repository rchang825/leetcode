/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    // intuition: iterate through all the rows and columns and convert to string (WITH COMMAS)

    let rows = new Map();
    grid.forEach((r) => {
        let currStr = r.join(',');
        if (rows.has(currStr)) {
            rows.set(currStr, rows.get(currStr) + 1);
        } else {
            rows.set(currStr, 1);
        }
    });
    let pairs = 0;
    // rows are already done, just join them w comma
    let cols = new Map();
    // iterate through columns and convert array to string
    for (let c = 0; c < grid[0].length; c++) {
        let curr = [];
        for (let r = 0; r < grid.length; r++) {
            curr.push(grid[r][c]);
        }
        let currStr = curr.join(',');
        if (rows.has(currStr)) {
            let freq = rows.get(currStr);
            pairs += freq;
        } 
    }
    return pairs;
};