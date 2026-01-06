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
var maxLevelSum = function(root) {
    // define sums array where each index corresponds to level
    const sums = [];
    // level order traversal and save each level's sum
    // queue
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let levelSize = queue.length;
        let currSum = 0;
        while (levelSize > 0) {
            let curr = queue.shift();
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
            currSum += curr.val;
            levelSize--;
        }
        sums.push(currSum);
    }
    // console.log(sums);
    // return level with max sum
    let res = 1;
    let maxSum = sums[0];
    for (let level = 1; level < sums.length; level++) {
        if (sums[level] > maxSum) {
            // console.log('updating max with', sums[level], 'at level', level + 1);
            maxSum = sums[level];
            res = level + 1;
        }
    }
    return res;
};