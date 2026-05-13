/**
 * // Definition for a QuadTree node.
 * function _Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */

/**
 * @param {number[][]} grid
 * @return {_Node}
 */
var getGridValue = function(grid, r, c, N) {
    // initialize valToMatch to top left
    const valToMatch = grid[r][c];
    // iterate thorugh grid 
    for (let i = r; i < r + N; i++) {
        for (let j = c; j < c + N; j++) {
            // return -1 if curr != valToMatch
            if (valToMatch !== grid[i][j]) {
                return -1;
            }
        }
    }
    // return val
    return valToMatch;
}
var helper = function(grid, r, c, N) {
    let gridVal = getGridValue(grid, r, c, N);
    // if grid has all 1's or all 0's
    if (gridVal !== -1) {
        // isLeaf = true
        // val = val of grid
        // topLeft, topRight, bottomLeft, bottomRight = null
        // return
        return new _Node(gridVal, true, null, null, null, null);
    } else {
    // otherwise (mix of 1 and 0)
        let node = new _Node(true, false, null, null, null, null);
        // isLeaf = false
        // val = 1 or 0
        // recurse on topLeft, topRight, bottomLeft, bottomRight
        node.topLeft = helper(grid, r, c, N / 2);
        node.topRight = helper(grid, r, c + N / 2, N / 2);
        node.bottomLeft = helper(grid, r + N / 2, c, N / 2);
        node.bottomRight = helper(grid, r + N / 2, c + N / 2, N / 2);
        return node;
    }
};
var construct = function(grid) {
    return helper(grid, 0, 0, grid.length);
};