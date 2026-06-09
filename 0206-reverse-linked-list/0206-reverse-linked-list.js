/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // empty list
    if (!head) {
        return head;
    }
    // prev, next, and curr
    // prev and next are null
    let prev = null;
    let next = null;
    let curr = head;
    // iterate while curr exists
    while (curr) {
        // next = curr.next (original next)
        next = curr.next;
        // curr.next = prev 
        curr.next = prev;
        // prev = curr
        prev = curr;
        // curr = next
        curr = next;
    }
    // return prev
    return prev;
};