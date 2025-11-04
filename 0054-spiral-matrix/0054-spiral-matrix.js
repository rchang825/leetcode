/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];
    var helper = function(r, c, rMin, rMax, cMin, cMax) {
        if (cMin >= c || c >= cMax || rMin >= r || r >= rMax) {
            return;
        }
        // go right
        if (rMin < r && r < rMax) {
            while (cMin < c && c < cMax) {
                res.push(matrix[r][c++]);
            }
            rMin++;
            c--;
            r++;
        }
        // go down
        if (cMin < c && c < cMax) {
            while (rMin < r && r < rMax) {
                res.push(matrix[r++][c]);
            }
            cMax--; 
            r--;
            c--;
        }
        // go left
        if (rMin < r && r < rMax) {
            while (cMin < c && c < cMax) {
                res.push(matrix[r][c--]);
            }
            rMax--; 
            c++;
            r--;
        }
        // go up
        if (cMin < c && c < cMax) {
            while (rMin < r && r < rMax) {
                res.push(matrix[r--][c]);
            }
            cMin++;
            r++; 
        }
        helper(r, c + 1, rMin, rMax, cMin, cMax);
    }
    helper(0, 0, -1, matrix.length, -1, matrix[0].length);
    return res;
};