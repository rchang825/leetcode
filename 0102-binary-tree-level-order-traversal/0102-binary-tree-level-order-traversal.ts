/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    // queue
    // edge case: null root
    if (!root) {
        return [];
    }
    // define res
    const res: number[][] = [[root.val]];
    // process root
    const queue: TreeNode[] = [];
    // add children to queue
    queue.push(root.left);
    queue.push(root.right);
    // loop while queue is not empty
    while (queue.length !== 0) {
        // define new level
        let level: number[] = [];
        // get number of children in level (current queue size)
        let nodesLeft: number = queue.length;
        while (nodesLeft > 0) {
            // pop off nodes in level and add children to queue
            let curr: TreeNode = queue.shift();
            if (curr) {
                level.push(curr.val);
                queue.push(curr.left);
                queue.push(curr.right);
            }
            nodesLeft--;
        }
        // add level to res
        if (level.length > 0) {
            res.push(level.slice());
        }
    }
    // return res
    return res;
};