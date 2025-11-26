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
    // edge case: empty list
    if (!head) {
        return false;
    }
    // fast and slow pointer
    let slow = head;
    let fast = head;
    // move pointers
    while (fast) {
        slow = slow.next;
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        } else {
            return false;
        }
        // if they meet, there is a cycle
        if (slow === fast) {
            // return true
            return true;
        }
            
    }
    // otherwise, return false
    return false;
};