/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    // edge case
    if (!node) {
        return node;
    }
	// queue, visited dictionary
    let clone: _Node = new _Node(node.val);
    const queue: _Node[] = [];
    const visited: Map<_Node, _Node> = new Map();
    visited.set(node, clone);
    queue.push(node);
    while (queue.length !== 0) {
        // pop curr and get its clone
        let curr: _Node = queue.shift();
        clone = visited.get(curr);
        // clone/add cloned neighbors to curr clone, push unvisited neighbors onto queue
        for (let neighbor of curr.neighbors) {
            if (!visited.has(neighbor)) {
                // clone new neighbor
                visited.set(neighbor, new _Node(neighbor.val));
                // add to queue to be fully visited
                queue.push(neighbor);
            }
            // add neighbor clones to curr clone
            clone.neighbors.push(visited.get(neighbor));
        }
    }
    // return clone of first node
    return visited.get(node);
};