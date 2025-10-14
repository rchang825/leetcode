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
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    // queue
    let queue = [];
    // define res array
    let res = [];
    // add root to queue with height 0
    queue.push([root, 0]);
    // run until queue empty
    while (queue.length !== 0) {
        let level = [];
        // pop from queue, visit, and add children with currHeight + 1 to queue
        let curr = queue.shift();
        level.push(curr[0].val);
        if (curr[0].left) {
            queue.push([curr[0].left, curr[1] + 1]);
        }
        if (curr[0].right) {
            queue.push([curr[0].right, curr[1] + 1]);
        }
        // console.log('queue', queue);
        //loop until heights stop matching
        while (queue.length !== 0 && curr[1] === queue[0][1]) {
            let curr = queue.shift();
            if (curr[0].left) {
                queue.push([curr[0].left, curr[1] + 1]);
            }
            if (curr[0].right) {
                queue.push([curr[0].right, curr[1] + 1]);
            }
            level.push(curr[0].val);
        }
        // this will be one level represented by one array
        // add array to res
        res.push(level);
        // console.log('res', res);
    }
    return res;
};