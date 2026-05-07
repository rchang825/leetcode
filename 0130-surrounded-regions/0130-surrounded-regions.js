/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const M = board.length;
    const N = board[0].length;

    var markSafe = function(r, c) {
        // if out of bounds or not 'O'
        if (r < 0 || r === M || c < 0 || c === N || board[r][c] !== 'O') {
            // return
            return;
        }
        // cell = '-'
        board[r][c] = '-';
        // markSafe left, right, up, down
        markSafe(r, c - 1);
        markSafe(r, c + 1);
        markSafe(r - 1, c);
        markSafe(r + 1, c);
    }
    var surround = function(r, c) {
        // if out of bounds or not 'O'
        if (r < 0 || r === M || c < 0 || c === N || board[r][c] !== 'O') {
            // return
            return;
        }
        // cell = 'X'
        board[r][c] = 'X';
        // surround left, right, up, down
        surround(r, c - 1);
        surround(r, c + 1);
        surround(r - 1, c);
        surround(r + 1, c);
    }
    // find bad Os and prevent them from being captured
    for (let c = 0; c < N; c++) {
        if (board[0][c] === 'O') {
            markSafe(0, c);
        }
        if (board[M - 1][c] === 'O') {
            markSafe(M - 1, c);
        }
    }
    for (let r = 0; r < M; r++) {
        if (board[r][0] === 'O') {
            markSafe(r, 0);
        }
        if (board[r][N - 1] === 'O') {
            markSafe(r, N - 1);
        }
    }

    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === 'O') {
                surround(r, c);
            }
        }
    }

    // convert the non-captured regions back to 'O'
    for (let r = 0; r < M; r++) {
        for (let c = 0; c < N; c++) {
            if (board[r][c] === '-') {
                board[r][c] = 'O';
            }
        }
    }
};