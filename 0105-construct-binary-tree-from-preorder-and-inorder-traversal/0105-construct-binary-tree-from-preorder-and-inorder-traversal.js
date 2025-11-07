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
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let i = 0;
    while (inorder[i] !== root.val) {
        i++;
    }
    root.left = buildTree(preorder.slice(1), inorder.slice(0, i));
    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    return root;
};