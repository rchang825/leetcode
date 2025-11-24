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
    // edge case: tree starts empty or a node can be a descendant of itself
    if (!root || root === p || root === q) {
        return root;
    }
    // recurse based on binary search criteria
    // p and q must both be in left subtree
    if (root.val > q.val && root.val > p.val) {
        return lowestCommonAncestor(root.left, p, q);
    } 
    // p and q must both be in right subtree
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    // p and q are in different subtrees (lc ancestor found!)
    return root;
};
