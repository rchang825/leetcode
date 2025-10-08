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
    // diameter = height of left tree + height of right tree
    // DOES NOT HAVE TO GO THROUGH ROOT -> check diameters of subtrees
    let diameter = 0;

    var findDiameter = function(root) {
        if (root === null) {
            return 0;
        }
        let left = findDiameter(root.left);
        let right = findDiameter(root.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    };

    findDiameter(root);
    return diameter;
};
