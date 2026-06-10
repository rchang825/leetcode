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
 * @param {number} targetSum
 * @return {number}
 */
var dfs = function(root, targetSum) {
    if (!root) {
        return 0;
    }
    targetSum -= root.val;
    if (targetSum === 0) {
        return 1 + dfs(root.left, targetSum) + dfs(root.right, targetSum);
    } else {
        return dfs(root.left, targetSum) + dfs(root.right, targetSum);
    }
};

var pathSum = function(root, targetSum) {
    if (!root) {
        return 0;
    }
    return dfs(root, targetSum) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum);
};