/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // traverse both trees simultaneously and compare their node values
    // BASE CASE: two null nodes are same
    if (!p && !q) {
        return true;
    }
    // cannot be same if p has node and q doesn't and vice versa
    if (!p && q || (p && !q)) {
        return false;
    }
    // cannot be same if values are not same
    if (p.val !== q.val) {
        return false;
    }
    // call isSameTree on left and right values
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};