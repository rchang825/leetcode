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
    let clone = new Node(node.val);
    // to avoid infinite looping, store nodes as "visited" somehow
    let visited = [];
    traverse(node, clone, visited);
    return clone;
};
var traverse = function(node, clone, visited) {
    visited[clone.val] = clone; // mark curr as visited by setting it to be cloned version
    // console.log(node.val, 'has neighbors', node.neighbors);
    node.neighbors.forEach((neighbor) => {
        if (visited[neighbor.val]) {
            clone.neighbors.push(visited[neighbor.val]); // add existing node
        } else {
            let newNode = new Node(neighbor.val); // clone node
            clone.neighbors.push(newNode); // add new cloned node
            traverse(neighbor, newNode, visited); // visit neighbors of "new" cloned node
        }
    });
}