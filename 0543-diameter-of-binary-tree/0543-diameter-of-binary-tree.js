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
var diameterOfBinaryTree = function(root) {
    // diameter = height of left tree + height of right tree
    // DOES NOT HAVE TO GO THROUGH ROOT -> check diameters of subtrees
    if (root === null) {
        return 0;
    }
    let diameter = Math.max(height(root.left) + height(root.right));
    return Math.max(diameter, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right));
};
var height = function(root) {
    if (root === null) {
        return 0;
    }
    return 1 + Math.max(height(root.left), height(root.right));
};