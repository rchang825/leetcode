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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }

    let res = [];
    let queue = [];
    queue.push(root);
    let currLevel = [];
    let startLeft = true;
    while (queue.length !== 0) {
        let size = queue.length;
        for (var i = 0; i < size; i++) {
            let curr = queue.shift();
            currLevel.push(curr.val);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }   
        }
        if (!startLeft) {
            currLevel = currLevel.reverse();
        }
        res.push(currLevel.slice());
        currLevel = [];
        startLeft = !startLeft;
    }
    return res;
};