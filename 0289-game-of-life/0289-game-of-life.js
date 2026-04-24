/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    /* iterate through each cell in board
    each cell is either dead or alive
    each cell can have up to 8 neighbors: check
    alive with < 2 live neighbors = dead
    alive with > 3 live neighbors = dead
    dead with 3 live neighbors = alive
    make sure everything is simultaneous (no cascading!)
        use something that isn't 0 or 1 to represent formerly dead or formerly alive
    */
    const M = board.length;
    const N = board[0].length;
    let isAlive = function(r, c) {
        return board[r][c] === 1 || board[r][c] === -1;
    }
    let checkNeighbors = function(r, c) {
        let live = 0;
        if (r > 0 && c > 0 && isAlive(r - 1, c - 1)) {
            live++;
        }
        if (r > 0 && isAlive(r - 1, c)) {
            live++;
        }
        if (r > 0 && c < N - 1 && isAlive(r - 1, c + 1)) {
            live++;
        }
        if (c > 0 && isAlive(r, c - 1)) {
            live++;
        }
        if (c < N - 1 && isAlive(r, c + 1)) {
            live++;
        }
        if (r < M - 1 && c > 0 && isAlive(r + 1, c - 1)) {
            live++;
        }
        if (r < M - 1 && isAlive(r + 1, c)) {
            live++;
        }
        if (r < M - 1 && c < N - 1 && isAlive(r + 1, c + 1)) {
            live++;
        }
        return live;
    }
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            // dead or alive?
            let alive = board[r][c] === 1;
            // console.log(`cell at [${r}][${c}] is ${alive ? 'alive' : 'dead'}`);
            // number of live neighbors = fun(r, c)
            let neighbors = checkNeighbors(r, c);
            // console.log('and has', neighbors, 'live neighbors');
            // now dead or alive? -1 or 2 if changed from original status
            if (alive && neighbors < 2) {
                // dead
                // console.log('so is now dead');
                board[r][c] = -1;
            } else if (alive && neighbors > 3) {
                // dead
                // console.log('so is now dead');
                board[r][c] = -1;
            } else if (!alive && neighbors === 3) {
                // alive
                // console.log('so is now alive');
                board[r][c] = 2;
            } else {
                // console.log(`so is staying ${alive ? 'alive' : 'dead'}`);
            }
        }
    }
    // loop again and conform flags to 0 or 1
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (board[r][c] === -1) {
                board[r][c] = 0;
            } else if (board[r][c] === 2) {
                board[r][c] = 1;
            }
        }
    }
};