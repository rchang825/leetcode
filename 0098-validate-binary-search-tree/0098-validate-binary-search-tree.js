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
    
    // base case: root is null, return true
    if (root === null) {
        return true;
    }
    // base case: left is greater
    if (root.left && root.left.val >= root.val) {
        console.log('left is not valid');
        return false;
    }
    // base case: right is lesser
    if (root.right && root.right.val <= root.val) {
        console.log('right is not valid');
        return false;
    }
    if (checkLeft(root.left, root) && checkRight(root.right, root)) {
        return isValidBST(root.left) && isValidBST(root.right);
    }
    return false;
};
var checkLeft = function(curr, root) {
    if (curr === null) {
        return true;
    }
    if (curr.val >= root.val) {
        return false;
    }
    return checkLeft(curr.left, root) && checkLeft(curr.right, root);
}
var checkRight = function(curr, root) {
    if (curr === null) {
        return true;
    }
    if (curr.val <= root.val) {
        return false;
    }
    return checkRight(curr.left, root) && checkRight(curr.right, root);
}