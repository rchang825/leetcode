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
 * @return {number}
 */
var maxLevelSum = function(root) {
    // level order traversal (BFS with queue)
    // keep track of current level
    // define max sum and max level
    const q = [];
    let maxSum = Number.NEGATIVE_INFINITY;
    let maxLevel = 1;
    let currLevel = 1;
    // get sum of each level, update max level and max sum if needed
    q.push(root);
    while(q.length) {
        let currSum = 0;
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            currSum += curr.val;
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }
        }
        if (currSum > maxSum) {
            maxSum = currSum;
            maxLevel = currLevel;
        }
        currLevel++;
    }
    // return max level
    return maxLevel;
};