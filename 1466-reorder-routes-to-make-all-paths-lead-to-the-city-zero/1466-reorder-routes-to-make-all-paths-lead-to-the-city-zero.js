/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    // want all nodes to reach 0
    // start from 0 and reach other nodes,
    // "flip" all the edges so traversal is forwards but count stays tracking backwards reversals
    let res = 0;
    let adj = new Array(n).fill(0).map(() => []);
    for (let c of connections) {
        let [src, dest] = c;
        adj[src].push([dest, 1]); // flipped original reversed edge, will cause res to increment
        adj[dest].push([src, 0]); // original edge but reversed for ease of traversal
    }

    var dfs = function(curr, parent) {
        for (let n of adj[curr]) {
            let [neighbor, sign] = n;
            if (neighbor !== parent) {
                res += sign;
                dfs(neighbor, curr);
            }
        }
    }

    dfs(0, -1);

    return res;
};