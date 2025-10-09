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
var maxDepth = function(root) {
    // recursion: 
    // base case: root is null
    if (root === null) {
        // return 0
        return 0;
    }
    // recursive case:
        // return 1 + max of recurse(left) and recurse(right)
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};