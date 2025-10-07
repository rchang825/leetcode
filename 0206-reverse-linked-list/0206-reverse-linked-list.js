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
    if (!head) {
        return head;
    }
    // three pointers: prev = null, curr, and next
    let prev = null;
    let curr = head;
    let next = curr.next;
    // console.log('curr', curr);
    // iterate through until next is null
    while (next !== null) {
        curr.next = prev;
        prev = curr;
        // console.log(prev);
        curr = next;
        next = next.next;
    }
    // link last node to rest of reversed list
    curr.next = prev;
    // return curr
    return curr;
};