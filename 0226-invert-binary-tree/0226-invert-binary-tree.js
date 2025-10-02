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
var invertTree = function(root) {
    // while there are still children
        // look at children
    // swap
    if (root !== null) {
        let left = invertTree(root.left);
        let right = invertTree(root.right);
        let temp = left;
        root.left = right;
        root.right = temp;
    }
    return root;
};