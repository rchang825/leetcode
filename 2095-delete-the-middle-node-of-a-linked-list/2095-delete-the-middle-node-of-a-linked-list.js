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
var deleteMiddle = function(head) {
    if (!head.next) {
        return null;
    }
    // find length n of list
    let curr = head;
    let n = 0;
    while (curr != null) {
        curr = curr.next;
        n++;
    }
    // find middle node = ⌊n / 2⌋
    let mid = Math.floor(n / 2);
    // iterate to middle node - 1
    curr = head;
    while (mid > 1) {
        curr = curr.next;
        mid--;
    }
    // delete middle node by skipping over it
    curr.next = curr.next ? curr.next.next : null;
    return head;
};