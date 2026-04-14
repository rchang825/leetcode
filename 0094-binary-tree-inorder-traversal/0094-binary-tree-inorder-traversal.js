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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // define res[]
    const res = [];
    // left, node, right
    var inorder = function(curr) {
        if (!curr) {
            return;
        }
        if (curr.left) {
            inorder(curr.left);
        }
        res.push(curr.val);
        if (curr.right) {
            inorder(curr.right);
        }
    }
    inorder(root);
    return res;
};