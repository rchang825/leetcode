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
 * @return {boolean}
 */
var isValidBST = function(root) {
    // iterate through tree
    // return false early if curr.left >= curr.val
    // also check if all nodes to in left subtree are less than root
    // return false early if curr.right <= curr.val
    // also check if all nodes to in right subtree are greater than root
    // left and right subtrees must also be valid
    let prev;
    var validate = function(curr) {
        // base case: root is null, return true
        if (curr === null) {
            return true;
        }
        // left
        if (!validate(curr.left)) {
            return false;
        }
        if (prev && prev.val >= curr.val) {
            return false;
        }
        prev = curr;
        // right
        if (!validate(curr.right)) {
            return false;
        }
        return true;
    };
    return validate(root);
};