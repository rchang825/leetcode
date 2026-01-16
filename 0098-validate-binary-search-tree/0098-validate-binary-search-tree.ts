/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
    // left child < root
    // right child > root
    // left subtree only contains values less than root
    // right subtree only contains values more than root
    let prev: TreeNode | null;
    function validate(curr: TreeNode): boolean {
        // base case: empty root is valid BST
        if (!curr) {
            return true;
        }
        if (!validate(curr.left)) {
            return false;
        }
        if (prev && prev.val >= curr.val) {
            return false;
        }
        prev = curr;
        if (!validate(curr.right)) {
            return false;
        }
        return true;
    }
    return (validate(root));
};