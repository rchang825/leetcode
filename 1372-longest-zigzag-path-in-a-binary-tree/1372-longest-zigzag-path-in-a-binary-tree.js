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

var longestZigZag = function(root) {
    let length = 0;
    var helper = function(curr, isLeft, steps) {
        // return if null node
        if (!curr) {
            return;
        }
        length = Math.max(length, steps);
        // if isLeft, consider adding right to current path or starting new path
        if (isLeft) {
            helper(curr.right, false, steps + 1), 
            helper(curr.left, true, 1);
        } else {
        // otherwise, consider adding left to current path or starting new path
            helper(curr.left, true, steps + 1);
            helper(curr.right, false, 1);
        };
    }
    helper(root, true, 0);
    helper(root, false, 0);
    return length;
};