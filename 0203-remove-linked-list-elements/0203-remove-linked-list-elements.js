/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    while (head && head.val === val) {
        head = head.next;
    }
    let curr = head;
    while (curr != null) {
        let nextCurr = curr.next;
        while (nextCurr && nextCurr.val === val) {
            nextCurr = nextCurr.next;
        }
        curr.next = nextCurr;
        curr = curr.next;
    }
    return head;
};