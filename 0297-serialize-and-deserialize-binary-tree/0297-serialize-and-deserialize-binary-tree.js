/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];
    var helper = function(curr) {
        if (curr === null) {
            res.push(null);
        } else {
            res.push(curr.val);
            helper(curr.left);
            helper(curr.right);
        }
    }
    helper(root);
    // return array JSON stringified (to maintain distinct elements)
    console.log(JSON.stringify(res));
    return JSON.stringify(res);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    // iterate through string parsed back into array
    // if (data === '[null]') {
    //     return null;
    // }
    data = JSON.parse(data);
    var helper = function() {
        if (data[0] === null) {
            data.shift();
            return null;
        }
        let root = new TreeNode(data[0]);
        data.shift();
        root.left = helper();
        root.right = helper();
        return root;
    }
    return helper();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */