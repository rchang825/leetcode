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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return;
    }
    // flatten left
    flatten(root.left);
    // flatten right
    flatten(root.right);
    // leaf = go as far down and right as possible for root.left
    if (root.left) {
        let leaf = root.left;
        while (leaf.right) {
            leaf = leaf.right;
        }
        // set leaf.right to root.right
        leaf.right = root.right;
        // root.right = root.left
        root.right = root.left;
        // root.left = null
        root.left = null;
    }
};