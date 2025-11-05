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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // level order traversal but add right children first
    // keep track of height and only add first of height to res
    // root = height 0 -> add 1
    // 3 (h=1), 2 (h=1) -> add 3
    // 4 (h=2) -> add 4
    // 5 (h=3) -> add 5

    let queue = [];
    let res = [];
    queue.push([root, 0]);
    while (queue.length !== 0) {
        let curr = queue.shift();
        let height = curr[1];
        if (curr[0] !== null) {
            res.push(curr[0].val);
            queue.push([curr[0].right, height + 1]);
            queue.push([curr[0].left, height + 1]);
            while (queue.length !== 0 && height === queue[0][1]) {
                let ignored = queue.shift();
                if (ignored[0] !== null) {
                    queue.push([ignored[0].right, ignored[1] + 1]);
                    queue.push([ignored[0].left, ignored[1] + 1]);
                }
            } // ignore all other nodes on same level but add their children!
        }
    }
    return res;
};