/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if (!root) {
        return root;
    }
    // level order traversal: queue
    // keep track of level!
    let q = [];
    if (root.left) {
        q.push(root.left);
    }
    if (root.right) {
        q.push(root.right);
    }
    while (q.length) {
        let levelSize = q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            if (curr) {
                if (i !== levelSize - 1) {
                    curr.next = q[0];
                } 
                if (curr.left) {
                    q.push(curr.left);
                }
                if (curr.right) {
                    q.push(curr.right);
                }
            }
        }
    }
    return root;
};