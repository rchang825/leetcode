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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    var getSuccessor = function(curr) {
        if (!curr) {
            return null;
        }
        curr = curr.right;
        while (curr.left) {
            curr = curr.left;
        }
        return curr.val;
    }
    var getPredecessor = function(curr) {
        if (!curr) {
            return null;
        }
        curr = curr.left;
        while (curr.right) {
            curr = curr.right;
        }
        return curr.val;
    }

    if (!root) {
        return null;
    }

    if (root.val < key) {
        root.right = deleteNode(root.right, key);
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        // node is leaf
        if (!root.left && !root.right) {
            // set node to null
            root = null;
        } else if (root.right) {
        // node has right child
            // replace node value with successor (leftiest child of right child)
            root.val = getSuccessor(root);
            // delete successor
            root.right = deleteNode(root.right, root.val);
        } else {
        // node has no right child
            // replace node value with predecessor
            root.val = getPredecessor(root);
            // delete predecessor
            root.left = deleteNode(root.left, root.val);
        }
    }
    return root;
};