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
var sumNumbers = function(root) {
    let sum = 0;
    // backtracking with a helper func that takes in curr node and current numPath
    var helper = function(curr, numPath) {
        if (!curr) {
            return;
        }
        // if at end of path (leaf node)
        if (!curr.left && !curr.right) {
            // console.log('adding', numPath + curr.val);
            // add to sum and return
            sum += parseInt(numPath + curr.val);
        } else {
        // otherwise,
            // recurse down left child and right child
            numPath += curr.val.toString();
            helper(curr.left, numPath);
            helper(curr.right, numPath);
        }
    };
    helper(root, '');
    // return sum
    return sum;
};