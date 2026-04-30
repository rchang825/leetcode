/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTreeRec = function(inorder, postorder) {
    let map = new Map();
    let i = 0;
    for (let val of inorder) {
        map.set(val, i);
        i++;
    }
    let rootiest = postorder.length - 1;
    var helper = function(leftI, rightI) {
        if (leftI > rightI) {
            return null;
        }
        let root = new TreeNode(postorder[rootiest]);
        let rootI = map.get(root.val);
        rootiest--;
        root.right = helper(rootI + 1, rightI);
        root.left = helper(leftI, rootI - 1);
        return root;
    };
    return helper(0, inorder.length - 1);
};
var buildTree = function(inorder, postorder) {
    if (inorder.length === 0) {
        return null;
    }
    let root = new TreeNode(postorder[postorder.length - 1]);
    let i = 0;
    while (inorder[i] !== root.val) {
        i++;
    }
    postorder.pop();
    root.right = buildTree(inorder.slice(i + 1), postorder);
    root.left = buildTree(inorder.slice(0, i), postorder);
    return root;
};