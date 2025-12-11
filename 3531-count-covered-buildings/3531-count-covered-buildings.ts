function countCoveredBuildings(n: number, buildings: number[][]): number {
      // build cols
    const cols: number[][] = new Array(n + 1).fill(null).map(() => new Array());
    buildings.forEach((b) => {
        cols[b[0]].push(b[1]);
    });
    // build rows
    const rows: number[][] = new Array(n + 1).fill(null).map(() => new Array());
    buildings.forEach((b) => {
        rows[b[1]].push(b[0]);
    });
    // console.log(cols);
    // console.log(rows);
    // sort
    cols.forEach((c) => c.sort((a, b) => a - b));
    rows.forEach((r) => r.sort((a, b) => a - b));
    // console.log(cols);
    // console.log(rows);
    // define count
    let count: number = 0;
    // iterate through buildings
    buildings.forEach(([x, y]) => {
        if (rows[y].length >= 3 && cols[x].length >= 3) {
            // if building row is within bounds
            if (rows[y][0] < x && x < rows[y][rows[y].length - 1]) {
                // and
                // if building col is within bounds
                if (cols[x][0] < y && y < cols[x][cols[x].length - 1]) {
                    // increment count
                    count++;
                }
            }            
        } 
    });

    // return count
    return count;
};