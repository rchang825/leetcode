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
    // level order traversal: stack
    // keep track of level!
    // define stack
    let stk = [];
    // root stays unchanged because no right nodes
    // add first children to stack
    if (root.left) {
        stk.push(root.left);
    }
    if (root.right) {
        stk.push(root.right);
    }
    // loop while stack not empty
    while (stk.length) {
        // loop through all possible nodes in level including null nodes
        let levelSize = stk.length;
        // console.log('this level has', levelSize, 'nodes');
        for (let i = 0; i < levelSize; i++) {
            // curr is stack pop
            let curr = stk.shift();
            if (curr) {
                if (i !== levelSize - 1) {
                    curr.next = stk[0];
                    // console.log(curr.val, 'points to', curr.next.val);
                } else {
                    // console.log(curr.val, 'is the rightmost node and points to nothing!');
                }
                
                // add curr left and right children only if they exist
                if (curr.left) {
                    stk.push(curr.left);
                }
                if (curr.right) {
                    stk.push(curr.right);
                }
            }
        }
    }
    // return root
    return root;
};