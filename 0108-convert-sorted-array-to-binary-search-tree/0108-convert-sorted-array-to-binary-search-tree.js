/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null;
    }
    // take the middle or leftmost middle as root
    let midIndex = Math.floor(nums.length / 2);
    let root = new TreeNode(nums[midIndex]);
    // call sortedArrayToBST on left subarray as root.left
    root.left = sortedArrayToBST(nums.slice(0, midIndex));
    // call sortedArrayToBST on right subarray as root.right;
    root.right = sortedArrayToBST(nums.slice(midIndex + 1));
    return root;
};