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
    // base case: root is null (end of subtree or no tree at all) 
    if (!root) {
        return 0;
    }
    // recursive case: 
    // current node has a depth of 1
    // recurse on the left tree and right tree to get depths of subtrees
    // add the maximum of left and right tree depth
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};