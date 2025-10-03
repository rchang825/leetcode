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
    // returns if p or q doesn't exist within subtree
    if (root === null) {
        return null;
    }
    // edge case: a node can be a descendant of itself
    if (root === p || root === q) {
        return root;
    }
    // recurse based on binary search criteria
    if (root.val > q.val && root.val > p.val) {
        // console.log('looking in left subtree');
        return lowestCommonAncestor(root.left, p, q);
    } 
    if (root.val < p.val && root.val < q.val) {
        // console.log('looking in right subtree');
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};
