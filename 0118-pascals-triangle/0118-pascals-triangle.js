/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // define triangle
    let triangle = [[1]];
    // iterate from 1-numRows
    for (var i = 2; i <= numRows; i++) {
        // define new level
        // pad with 1
        let curr = [1];
        // get the prev row (last row in current triangle)
        let prev = triangle[triangle.length - 1];
        // for each pair
        for (var left = 0;left < prev.length - 1; left++) {
            // push sum to level
            curr.push(prev[left] + prev[left + 1]);
        }
        // pad with 1
        curr.push(1);
        // push level to triangle
        triangle.push(curr.slice());
    }
    // return triangle
    return triangle;
};