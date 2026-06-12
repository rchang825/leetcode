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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // BST rules: if target less than root, search left
    // if target greater than root, search right
    // if target = root, return root
    if (!root) {
        return null;
    }
    const comparator = root.val - val;
    if (comparator === 0) {
        return root;
    }
    if (comparator > 0) {
        return searchBST(root.left, val);
    }
    return searchBST(root.right, val);
};