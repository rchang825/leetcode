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
    // I: root of a binary tree
    // O: array of arrays, where each subarray represents a row of node values
    // C: number of nodes in tree could be up to 2000 (pretty large)
        // always start from left to right (even on root node)
    // E: number of nodes in tree could be 0 (root = null)

    // handle edge case: root is null, tree has 0 nodes
    if (!root) {
        return [];
    }
    // define a res array
    let res = [];
    // modified level order traversal: 
    // define a queue
    let queue = [];
    // add root and starting direction to queue
    queue.push(root);
    // initialize current level array as empty array
    let currLevel = [];
    // define a starting direction
    let startLeft = true;
    // while the queue is not empty
    while (queue.length !== 0) {
        // level size = current length of queue
        let size = queue.length;
        // inner loop for size of level
        for (var i = 0; i < size; i++) {
            // dequeue (array.shift())
            let curr = queue.shift();
            // console.log('at curr', curr);
            // console.log(startLeft ? 'going from left to right' : 'going from right to left');
            // if curr exists 
            if (curr) {
                // visit node by pushing its val to the current level array
                currLevel.push(curr.val);
                // add children if they exist
                if (curr.left) {
                    queue.push(curr.left);
                }
                if (curr.right) {
                    queue.push(curr.right);
                }   
            }
        }
        // level complete,
        // reverse currLevel if starting from right
        if (!startLeft) {
            currLevel = currLevel.reverse();
        }
        // console.log('level complete', currLevel);
        res.push(currLevel.slice());
        // start a new level
        currLevel = [];
        // reverse direction
        startLeft = !startLeft;
    }
    // return res array
    return res;
};