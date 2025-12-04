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
    // handle empty list
    if (!head) {
        return head;
    }
    // initialize prev, curr, and temp
    let prev = null;
    let curr = head;
    let temp = curr;

    // iterate through linked list
    while (curr !== null) {
        // maintain next iterable place in original list
        temp = temp.next;
        // reverse curr and prev
        curr.next = prev;
        // update prev and curr for next iteration
        prev = curr;
        curr = temp;
    }
    // at this point, curr and temp are null
    // prev will be the last node of original list
    // aka the head of the reversed list
    // return prev
    return prev;
};