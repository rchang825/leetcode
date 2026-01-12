function minTimeToVisitAllPoints(points: number[][]): number {
    function visit(curr: number[], p: number[]): number {
        // move diagonally as much as possible, then horizontally or vertically
        // find slope: p[1] - c[1] / p[0] - c[0]
        const yDelta: number = Math.abs(p[1] - curr[1]); // 3 or 4
        const xDelta: number = Math.abs(p[0] - curr[0]); // 2 or 4
        return Math.max(yDelta, xDelta);
    }
    // running total of time used
    let time: number = 0;
    // define curr
    let curr: number[] = points[0];
    // iterate through all points
    for(let i: number = 1; i < points.length; i++) {
        // udpate time
        time += visit(curr, points[i]);
        curr = points[i];
    }
    return time;
};