function updateMatrix(mat: number[][]): number[][] {
    // declare constants
    const m = mat.length;
    const n = mat[0].length;
    // initialize res array to be all the zeros in mat
    // all 0's will have a distance of 0 to the nearest 0
    const res: number[][] = Array.from({ length: m }, () => new Array(n));
    // declare a queue
    const q: number[][] = [];
    for (let r: number = 0; r < m; r++) {
        for (let c: number = 0; c < n; c++) {
            // if 0
            if (mat[r][c] === 0) {
                // add to queue by position and distance 0
                res[r][c] = 0;
                q.push([r, c, 0]);
            } else {
                res[r][c] = -1;
            }
        }
    }
    // while queue is not empty
    while (q.length !== 0) {
        // dequeue a current element
        let [r, c, dist] = q.shift();
        // check left, right, up, down neighbor of curr if in bounds
        // if neighbor doesn't have distance yet
            // set distance of neighbor = curr distance + 1
            // push neighbor onto queue
        if (c > 0 && res[r][c - 1] === -1) {
            res[r][c - 1] = dist + 1;
            q.push([r, c - 1, dist + 1]); 
        }
        if (c < n - 1 && res[r][c + 1] === -1) {
            res[r][c + 1] = dist + 1;
            q.push([r, c + 1, dist + 1]); 
        }
        if (r > 0 && res[r - 1][c] === -1) {
            res[r - 1][c] = dist + 1;
            q.push([r - 1, c, dist + 1]); 
        }
        if (r < m - 1 && res[r + 1][c] === -1) {
            res[r + 1][c] = dist + 1;
            q.push([r + 1, c, dist + 1]); 
        }
    }
    // return res array
    return res;
}
function updateMatrix1(mat: number[][]): number[][] {
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