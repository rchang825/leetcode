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
    let queue = [];
    let clones = {};
    clones[node.val] = new Node(node.val);
    queue.push(node);
    while (queue.length !== 0) {
        let curr = queue.shift();
        let clone = clones[curr.val];
        curr.neighbors.forEach((neighbor) => {
            if (!clones.hasOwnProperty(neighbor.val)) {
                clones[neighbor.val] = new Node(neighbor.val);
                queue.push(neighbor);
            }
            clone.neighbors.push(clones[neighbor.val]);
        });
    }
    return clones[node.val];
};