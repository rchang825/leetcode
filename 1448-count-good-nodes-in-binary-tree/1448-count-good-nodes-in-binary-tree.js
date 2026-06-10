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
var goodNodes = function(root, max = Number.NEGATIVE_INFINITY) {
    // keep track of current path maximum
    if (!root) {
        return 0;
    }
    return (root.val >= max ? 1 : 0) + goodNodes(root.left, Math.max(max, root.val)) + goodNodes(root.right, Math.max(max, root.val))
};