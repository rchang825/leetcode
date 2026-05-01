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
    // define queue
    let q = [];
    // root stays unchanged because no right nodes
    // add first children to queue
    if (root.left) {
        q.push(root.left);
    }
    if (root.right) {
        q.push(root.right);
    }
    // loop while queue not empty
    while (q.length) {
        // loop through all possible nodes in level including null nodes
        let levelSize = q.length;
        // console.log('this level has', levelSize, 'nodes');
        for (let i = 0; i < levelSize; i++) {
            // curr is queue dequeue
            let curr = q.shift();
            if (curr) {
                if (i !== levelSize - 1) {
                    curr.next = q[0];
                    // console.log(curr.val, 'points to', curr.next.val);
                } else {
                    // console.log(curr.val, 'is the rightmost node and points to nothing!');
                }
                
                // add curr left and right children only if they exist
                if (curr.left) {
                    q.push(curr.left);
                }
                if (curr.right) {
                    q.push(curr.right);
                }
            }
        }
    }
    // return root
    return root;
};