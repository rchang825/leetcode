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
    // I: ListNode reference head, target integer val
    // O: ListNode reference
    // C: target value and all node values are positive, <= 50, could be an empty list
    // E: list starts off empty -> return list,
        // list could be empty after removing values, -> empty node/null
        // head of list needs to be removed, head = head.next

    // iterate while head should be deleted
    while (head && head.val === val) {
        head = head.next;
    }
    // define curr as head
    let curr = head;
    // iterate through the entire list, until curr.next is null
    while (curr != null) {
        let nextCurr = curr.next;
        // while next elements should be deleted
        while (nextCurr && nextCurr.val === val) {
            // curr.next = curr.next.next
            nextCurr = nextCurr.next;
        }
        curr.next = nextCurr;
        curr = curr.next;
    }
    // return head
    return head;
};