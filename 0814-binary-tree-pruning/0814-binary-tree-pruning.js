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
 * @return {TreeNode}
 */
var pruneTree = function(root) {
    // must go to leaf for definitive answer -> dfs
    // post order traversal
        // go as far left as possible
        // go as far right as possible
        // if leaf node is not 1, delete it
    if (!root) {
        return null;
    }
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    if (!root.left && !root.right) {
        if (root.val !== 1) {
            return null;
        }
    }
    // edge case: one node left
    if (!root.left && !root.right) {
        if (root.val !== 1) {
            // delete root
            root = null;
        }
    }
    // return original root
    return root;
};