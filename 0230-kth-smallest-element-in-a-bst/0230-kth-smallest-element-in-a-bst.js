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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // build min heap while traversing tree from root
    let arr = [];
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        let curr = queue.shift();
        if (curr) {
            arr.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    console.log(arr.sort((a, b) => a - b));
    return arr.sort((a, b) => a - b)[k - 1];
}