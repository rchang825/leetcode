/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    // initialize copied list with og list
    let curr = head;

    // iterate through og list and copy val and og next
    while (curr) {
        let copy = new _Node(curr.val, curr.next, null);
        curr.next = copy;
        curr = copy.next;
    }
    // console.log(curr.next);

    // reset pointer
    curr = head;
    // iterate through 2 by 2 and connect each node's random to its next node (copy)
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // iterate through 2 by 2 and remove the originals
    curr = head;
    // first node in copied list is head of og list next
    copy = head.next;
    while (curr) {
        let copy = curr.next;
        curr.next = copy.next;
        if (copy.next) {
            copy.next = copy.next.next;
        } 
        curr = curr.next;
    }

    // return copy
    return copy;
};