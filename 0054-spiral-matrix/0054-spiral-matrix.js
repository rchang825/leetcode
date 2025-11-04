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
        while (cMin < c && c < cMax && rMin < r && r < rMax) {
            res.push(matrix[r][c++]);
        }
        rMin++;
        c--;
        // console.log(res);
        // console.log('rMin now', rMin);
        
        // go down
        r++;
        while (cMin < c && c < cMax && rMin < r && r < rMax) {
            res.push(matrix[r++][c]);
        }
        cMax--; 
        r--;
        // go left
        c--;
        while (cMin < c && c < cMax && rMin < r && r < rMax) {
            res.push(matrix[r][c--]);
        }
        rMax--; 
        c++;
        // console.log(res);
        // console.log('rMax now', rMax);
        // go up
        
        r--;
        while (cMin < c && c < cMax && rMin < r && r < rMax) {
            res.push(matrix[r--][c]);
        }
           cMin++;
           r++; 
        // console.log(res);
        // console.log('cMin now', cMin);
        // c = cMin - 1;
        
        // console.log(rMin, rMax, cMin, cMax);
        if (rMin >= rMax || cMin >= cMax) {
            return;
        } else {
            // console.log(res, 'recursing...');
            helper(r, c + 1, rMin, rMax, cMin, cMax);
        }
    }
    helper(0, 0, -1, matrix.length, -1, matrix[0].length);
    return res;
};