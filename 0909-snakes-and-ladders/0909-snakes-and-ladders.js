/**
 * @param {number[][]} board
 * @return {number}
 */
var snakesAndLadders = function(board) {
    // start from bottom left
    // can move alternating directions for each row
    // end at top left

    // build graph of end positions (take the step then take transport if there)
    // 
    /*
    each will have at most 6 edges
    1: 15, 3, 4, 5, 6, 7
    2: 3, 4, 5, 6, 7, 8
    3: 4, 5, 6, 7, 8, 9
    4: 5, 6, 7, 8, 9, 10
    5: 6, 7, 8, 9, 10, 11
    12: 17, 14, 15, 16, 17, 18
    13: 35, 15, 16, 13, 18, 19
    14: 2, 16, 13, 18, 19, 20

    */
    let goRight = true;
    const N = board.length;
    var indices = function(num) {
        let r = Math.floor((num - 1) / N);
        if (r % 2 === 0) {
            return [N - r - 1, (num - 1) % N];
        } 
        return [N - r - 1, N - 1 - (num - 1) % N];
    }
    let visited = new Array(N * N + 1).fill(false);
    let Q = [];
    Q.push([1, 0]); // first cell @ bottom left, total moves = 0
    visited[1] = true;
    
    while (Q.length) {
        let [curr, numMoves] = Q.shift();
        // if reached top left (N^2)
        if (curr === N * N) {
            // return numMoves
            return numMoves;
        }
        // add up to 6 edges
        for (let i = 1; i <= 6; i++) {
            let next = curr + i;
            if (next <= N * N) {
                let [r, c] = indices(next);
                // if transport
                if (board[r][c] !== -1) {
                    // override edge destination
                    next = board[r][c];
                }
                if (!visited[next]) {
                    visited[next] = true;
                    Q.push([next, numMoves + 1]);
                }
            }
        }
    }
    return -1;
};