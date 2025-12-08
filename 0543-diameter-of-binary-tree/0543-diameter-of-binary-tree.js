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
    // diameter = height of left subtree + height of right subtree
    // initialize a max diameter variable
    let maxDiameter = 0;
    // helper(curr) calculates height and updates max diameter seen
    var helper = function(curr) {
        // if curr is null
        if (!curr) {
            // return 0
            return 0;
        }
        // find height (1 + max of (helper(left) + helper(right)))
        let lHeight = helper(curr.left);
        let rHeight = helper(curr.right);
        // update diameter if applicable
        maxDiameter = Math.max(maxDiameter, lHeight + rHeight);
        // return height 
        return 1 + Math.max(lHeight, rHeight);
    };

    // call helper starting with root
    helper(root)
    // return diameter
    return maxDiameter;
};