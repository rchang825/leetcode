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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let res = null;
    var helper = function(curr) {
        if (curr === null) {
            return;
        }
        helper(curr.left);
        count++;
        if (count === k) {
            res = curr.val;
            return;
        }
        helper(curr.right);
    }
    helper(root);
    return res;
}