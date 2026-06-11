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
var rightSideView = function(root) {
    // level order trav
    // one node from each level gets accepted (last/right-most node)
    // BST with queue and track level sizes
    if (!root) {
        return [];
    }
    let queue = [];
    let res = [];
    queue.push(root);
    while (queue.length) {
        let levelSize = queue.length;
        let curr;
        for (let i = 0; i < levelSize; i++) {
           curr = queue.shift();
           if (curr.left) {
            queue.push(curr.left);
           }
           if (curr.right) {
            queue.push(curr.right);
           }
        }
        // curr node will be last node in level
        res.push(curr.val);
    }
    return res;
};