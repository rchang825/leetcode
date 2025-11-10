/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n <= 2) {
        let res = [];
        for (var i = 0; i < n; i++) {
            res.push(i);
        }
        return res;
    }
    // create adjacency list
    let adj = {};
    for (var i = 0; i < edges.length; i++) {
        if (!adj.hasOwnProperty(edges[i][0])) {
            adj[edges[i][0]] = new Set();
        }
        if (!adj.hasOwnProperty(edges[i][1])) {
            adj[edges[i][1]] = new Set();
        }
        adj[edges[i][0]].add(edges[i][1]);
        adj[edges[i][1]].add(edges[i][0]); 
    }
    // find all nodes that only have one connection
    let leaves = [];
    for (var j = 0; j < n; j++) {
        if (adj[j].size === 1) {
            leaves.push(j);
        }
    }
    // "trim" and remove those leaves
    while (n > 2) {
        n -= leaves.length;
        let temp = [];
        leaves.forEach((leaf) => {
            let neighbor = adj[leaf].values().next().value;
            adj[neighbor].delete(leaf);
            if (adj[neighbor].size === 1) {
                temp.push(neighbor);
            }
        });
        leaves = temp;
    }
    
    return leaves;
};