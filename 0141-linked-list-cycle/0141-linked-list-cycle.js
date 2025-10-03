/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // edge case: only one or no nodes in list -> return false
    if (!head || !head.next) {
        return false;
    }
    // slow and fast pointers!
    let slow = head.next;
    let fast = head.next.next;
    // make fast look two nodes ahead
    // if they ever match, that means there is a cycle (otherwise fast will reach end of list first)
    while (slow !== fast && slow && fast) {
        slow = slow.next;
        if (fast.next) {
            fast = fast.next.next;
        } else {
            return false; // list has odd number of nodes
        }
    }
    if (slow === fast) {
        return true;
    }
    return false;
};