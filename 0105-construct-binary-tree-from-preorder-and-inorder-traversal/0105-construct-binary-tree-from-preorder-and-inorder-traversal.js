/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (inorder.length === 0) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let i = 0;
    while (inorder[i] !== root.val) {
        i++;
    }
    preorder.shift();
    root.left = buildTree(preorder, inorder.slice(0, i));
    root.right = buildTree(preorder, inorder.slice(i + 1));
    return root;
};