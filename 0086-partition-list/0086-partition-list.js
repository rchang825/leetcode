/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head) {
        return head;
    }
    let l1 = new ListNode();
    let p1 = l1;
    let l2 = new ListNode();
    let p2 = l2;

    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = p1.next;
        } else {
            p2.next = head;
            p2 = p2.next;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = l2.next;
    return l1.next;  
};