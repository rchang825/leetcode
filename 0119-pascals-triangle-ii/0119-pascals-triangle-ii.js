/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // prev row:
    // start with row 1 = [1]
    let prev = [1];
    // define current level
    let curr = [];
    // iterate to rowIndex
    for (var i = 1; i <= rowIndex; i++) {
        // pad current level with 1
        curr.push(1);
        // for each pair in prev row
        for (var j = 0; j < prev.length - 1; j++) {
            // add sum to current level
            curr.push(prev[j] + prev[j + 1]);
        }
        // pad with 1
        curr.push(1);
        // prev = current level
        prev = curr.slice();
        // reset current level to empty array 
        curr = [];
    }
    // return last row of triangle
    return prev;
};