/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let max = mat.length + mat[0].length;
    for (var r = 0; r < mat.length; r++) {
        for (var c = 0; c < mat[r].length; c++) {
            if (mat[r][c] !== 0) {
                let top = r > 0 ? mat[r - 1][c] : max; 
                let left = c > 0 ? mat[r][c - 1] : max;
                mat[r][c] = Math.min(top, left) + 1;
            }
        }
    }
    for (var r = mat.length - 1; r >= 0; r--) {
        for (var c = mat[r].length - 1; c >= 0; c--) {
            if (mat[r][c] !== 0) {
                let bot = r < mat.length - 1 ? mat[r + 1][c] : max;
                let right = c < mat[0].length - 1 ? mat[r][c + 1] : max;
                mat[r][c] = Math.min(mat[r][c], Math.min(bot, right) + 1);
            }
        }
    }
    return mat;
};