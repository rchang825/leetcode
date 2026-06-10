/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var getLeaves = function(root, seq) {
    if (!root) {
        return;
    }
    if (!root.left && !root.right) {
        seq.push(root.val);
    } 
    getLeaves(root.left, seq);
    getLeaves(root.right, seq);
    
    return seq;
}
var leafSimilar = function(root1, root2) {
    let seq1 = getLeaves(root1, []);
    let seq2 = getLeaves(root2, []);
    // return comparison of seqs joined as string (with comma)
    return seq1.join(',') === seq2.join(',');
};