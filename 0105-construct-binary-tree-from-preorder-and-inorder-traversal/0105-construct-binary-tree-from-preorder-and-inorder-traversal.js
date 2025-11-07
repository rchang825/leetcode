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
    // console.log('pre', preorder, 'in', inorder);
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let i = 0;
    while (inorder[i] !== root.val) {
        i++;
    }
    // everything before i is on curr's left branch
    // everything after i is on curr's right branch
    // console.log('finding curr.left of', curr.val);
    root.left = buildTree(preorder.slice(1), inorder.slice(0, i));
    // console.log('finding curr.right of', curr.val);
    root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1));
    // console.log(root.val);
    return root;
};