/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    // level by level: bfs queue
    // sum / number of nodes in each level (ignore nulls!)
    if (!root) {
        return [];
    }
    let res = [];
    let q = [];
    q.push(root);
    while (q.length) {
        let numNodes = q.length;
        let sum = 0;
        for (let i = 0; i < numNodes; i++) {
            // dequeue and process, add children if not null
            let curr = q.shift();
            sum += curr.val;
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
        }
        res.push(sum / numNodes);
    }
    return res;
};