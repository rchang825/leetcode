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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    // in order traversal
    // left
    // root
    // right
    const inOrderTrav = [];
    var inOrder = function(root) {
        if (root.left) {
            inOrder(root.left);
        }
        inOrderTrav.push(root.val);
        if (root.right) {
            inOrder(root.right);
        }
    }
    inOrder(root);
    // console.log(inOrderTrav);
    // identify values to swap
    const swap = [];
    const ideal = inOrderTrav.slice().sort((a, b) => a - b);
    for (let i = 0; i < inOrderTrav.length; i++) {
        if (inOrderTrav[i] !== ideal[i]) {
            swap.push(inOrderTrav[i]);
        }
    }
    // console.log('swap', swap);
    // traverse again until values match swap then swap
    var travSwap = function(root) {
        if (root.left) {
            travSwap(root.left);
        }
        if (swap.includes(root.val)) {
            // perform swap
            if (swap[0] === root.val) {
                root.val = swap[1];
            } else {
                root.val = swap[0];
            }
        }
        if (root.right) {
            travSwap(root.right);
        }
    }
    travSwap(root);
};