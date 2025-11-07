/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // helper function that takes in curr
    let isValid = function(curr, r, c) {
        // if curr === word
        if (curr === word.length) {
            // return true
            return true;
        }
        // return false for out of bounds r and/or c
        if (r < 0 || r >= m) {
            return false;
        }
        if (c < 0 || c >= n) {
            return false;
        }
        let el = board[r][c];
        // curr + board[r][c]
    
        // console.log(board);
        // if curr is a substring of word 
        if (word[curr] === board[r][c]) {
        // mark board as visited
            board[r][c] = '-';
            // check if any next direction isValid
            let res = isValid(curr + 1, r, c + 1) || isValid(curr + 1, r, c - 1) || isValid(curr + 1, r + 1, c) || isValid(curr + 1, r - 1, c);
            board[r][c] = el;
            if (res) {
                return res;
            }
        }    
        return false;
    }
    // move from left to right, top to bottom
    let m = board.length;
    let n = board[0].length;
    for (var r = 0; r < m; r++) {
        for (var c = 0; c < n; c++) {
            // call isValid on each element
            // return early if possible
            if (isValid(0, r, c)) {
                return true;
            }
        }
    }
    // return false once at bottom right of board
    return false;
};