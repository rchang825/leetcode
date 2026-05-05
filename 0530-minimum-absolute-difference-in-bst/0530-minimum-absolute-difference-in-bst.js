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
var getMinimumDifference = function(root) {
    // inorder traversal of BST is inherently sorted
    let trav = [];
    var helper = function(curr) {
        if (!curr) {
            return;
        }
        helper(curr.left);
        trav.push(curr.val);
        helper(curr.right);
    }
    helper(root);
    let min = Infinity;
    for (let i = 1; i < trav.length; i++) {
        min = Math.min(Math.abs(trav[i] - trav[i - 1]), min);
    }
    return min;
};