/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) {
        return node;
    }
    // need to keep track of what has already been visited/cloned
    const cloned = {};
    // while there are neighbors that haven't been visited, traverse
    var dfs = function(node) {
        if (!cloned.hasOwnProperty(node.val)) { // not already visited
            cloned[node.val] = new _Node(node.val);
            // console.log('cloned curr', cloned[node.val]);
            node.neighbors.forEach((neighbor) => {
                // console.log('neighbor', neighbor);
                cloned[node.val].neighbors.push(dfs(neighbor));
            });
        }
        return cloned[node.val];
    }
    return dfs(node);
};