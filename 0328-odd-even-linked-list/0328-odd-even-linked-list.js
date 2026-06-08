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
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }
    let even = head;
    let evenP = even;
    let odd = head.next;
    let oddP = odd;

    // move odds to odds list and keep evens in evens list
    // return odds list tacked onto end of evens list
    while (oddP && oddP.next) {
        evenP.next = oddP.next;
        evenP = evenP.next;
        if (evenP) {
            oddP.next = evenP.next;
            oddP = oddP.next;
        }
    }
    evenP.next = odd;
    return head;
};