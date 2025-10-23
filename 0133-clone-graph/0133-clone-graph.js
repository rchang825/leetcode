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
    // to avoid infinite looping, store nodes as "visited" somehow
    let visited = [];
    return traverse(node, visited);;
};
var traverse = function(node, visited) {
    // if not already cloned
    if (!visited[node.val]) {
        visited[node.val] = new Node(node.val); // visit and clone curr
        // console.log(node.val, 'has neighbors', node.neighbors);
        node.neighbors.forEach((neighbor) => {
            visited[node.val].neighbors.push(traverse(neighbor, visited)); // visit neighbors
        });
    }
    return visited[node.val];
}