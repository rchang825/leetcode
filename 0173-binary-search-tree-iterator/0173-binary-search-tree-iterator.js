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
 */
var BSTIterator = function(root) {
    this.trav = [];
    this.helper = function(curr) {
        if (!curr) {
            return;
        } 
        this.helper(curr.left);
        this.trav.push(curr.val);
        this.helper(curr.right);
    }
    this.helper(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.trav.shift();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return !!this.trav.length;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */