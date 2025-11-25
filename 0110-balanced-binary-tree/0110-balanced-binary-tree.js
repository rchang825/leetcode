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
 * @return {boolean}
 */
var isBalanced = function(root) {
    // height()   
    var height = function(curr) {
        if (!curr) {
            return 0;
        }
        // add 1 and recurse while children exist
        return Math.max(1 + height(curr.left), 1 + height(curr.right));
    }
    // edge case: empty node is balanced
    if (!root) {
        return true;
    }
    // get height of left tree and height of right tree
    // cannot differ by more than 1
    if (Math.abs(height(root.left) - height(root.right)) > 1) {
        return false;
    }
    // every subtree must also be balanced
    // call isBalanced to check left and right child
    return isBalanced(root.left) && isBalanced(root.right)
};