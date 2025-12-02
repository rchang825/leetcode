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
var isSymmetric = function(root) {
    // helper isMirror
    var isMirror = function(a, b) {
        if (!a && !b) {
            return true;
        }
        if (a && b && a.val === b.val) {
            return isMirror(a.left, b.right) && isMirror(a.right, b.left);
            // if (isMirror(a.left, b.right)) {
            //     return isMirror(a.right, b.left);
            // }
        } 
        return false;
    };
    // null values are symmetric
    if (!root) {
        return true;
    }
    // symmetric trees have mirrored left and right subtrees
    return isMirror(root.left, root.right);
};