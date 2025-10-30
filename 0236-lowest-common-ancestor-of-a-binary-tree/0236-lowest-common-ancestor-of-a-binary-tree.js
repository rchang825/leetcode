/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === p || p === q) {
        return p;
    }
    var hasChild = function(root, child) {
        if (root === null) {
            return false;
        }
        if (root === child) {
            return true;
        }
        return hasChild(root.left, child) || hasChild(root.right, child);
    }
    let ancestor = root;
    if (root.left && hasChild(root.left, p) && hasChild(root.left, q)) {
        ancestor = lowestCommonAncestor(root.left, p, q);
    }
    if (root.right && hasChild(root.right, p) && hasChild(root.right, q)) {
        ancestor = lowestCommonAncestor(root.right, p, q);
    }
    return ancestor;
};