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
    // what would make a binary tree unbalanced? if height of subtrees is > 1 level difference
    // find height of left subtree and height of right subtree:
        // recurse on left and right subtrees, adding 1 on each recursion and returning 0 when at end of tree
    // if difference > 1, return false
    if (root === null) {
        return true;
    }
    // console.log('height of left tree:', height(root.left));
    // console.log('height of right tree:', height(root.right));
    if (Math.abs(height(root.left) - height(root.right)) > 1) {
        return false;
    }
    // return true;
    return isBalanced(root.left) && isBalanced(root.right);
};
var height = function(root) {
    if (root === null) {
        return 0;
    }
    return Math.max(1 + height(root.left), 1 + height(root.right));
}