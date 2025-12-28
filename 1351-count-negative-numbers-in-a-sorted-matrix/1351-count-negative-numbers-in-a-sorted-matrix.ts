function countNegatives(grid: number[][]): number {
    // find m and n
    const m = grid.length;
    const n = grid[0].length;
    let res = 0;
    // go through each row
    for (let r: number = 0; r < m; r++) {
        let c: number = 0;
        // iterate until number is negative
        while (grid[r][c] >= 0) {
            c++;
        }
        // res + (n - index of first negative number)
        res += n - c;
    }
    // return res
    return res;
};