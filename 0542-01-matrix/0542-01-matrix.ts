function updateMatrix(mat: number[][]): number[][] {
    // constant variables
    const m = mat.length;
    const n = mat[0].length
    // if 0, distance is 0
    // start iterating from top left down to bottom right
        // at each point, distance = min(dist[up], dist[left]) + 1 or 0
    // iterate starting from bottom right to top left
        // distance = min(min, dist[down] + 1, dist[right] + 1)
    const dist: number[][] = Array.from({ length: m }, () => new Array(n));
    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            dist[r][c] = mat[r][c];
        }
    }
    // console.log(dist);
    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            // if 0 stays 0
            if (dist[r][c] !== 0) {
            // otherwise = min(adjacent distances) + 1
                let minNeighbor = Number.MAX_SAFE_INTEGER - 1;
                if (r > 0) {
                    minNeighbor = Math.min(minNeighbor, dist[r - 1][c]);
                }
                if (c > 0) {
                    minNeighbor = Math.min(minNeighbor, dist[r][c - 1]);
                }
                dist[r][c] = minNeighbor + 1;
            }
        }
    }
    for (let r: number = m - 1; r >= 0; r--) {
        for (let c: number = n - 1; c >= 0; c--) {
            // if 0 stays 0
            if (dist[r][c] !== 0) {
            // otherwise = min(adjacent distances) + 1
                let minNeighbor = Number.MAX_SAFE_INTEGER - 1;
                if (r < m - 1) {
                    minNeighbor = Math.min(minNeighbor, dist[r + 1][c]);
                }
                if (c < n - 1) {
                    minNeighbor = Math.min(minNeighbor, dist[r][c + 1]);
                }
                dist[r][c] = Math.min(dist[r][c], minNeighbor + 1);
            }
        }
    }
    // return new matrix
    return dist;
};