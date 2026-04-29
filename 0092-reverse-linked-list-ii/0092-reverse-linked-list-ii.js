/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let curr = head;
    let prev = null;
    // get to one before left and save
    for (let i = 1; i < left; i++) {
        prev = curr;
        curr = curr.next;
    }
    let start = prev;
    let revEnd = curr;
    prev = null;
    // console.log('going to reverse starting from node with val', curr.val);
    // reverse (for loop running right - left times)
    for (let i = 0; i < (right - left + 1); i++) {
        // console.log('prev:', prev, 'curr:', curr);
        // next is curr.next
        let next = curr.next;
        // console.log('next:', next);
        // curr.next = prev
        curr.next = prev;
        // prev = curr
        prev = curr;
        // console.log('prev is now:', prev);
        // curr = next 
        curr = next;
    }
    // console.log('prev', prev);

    // 4 -> 3 -> 2 -> null
    // make sure to save old right.next
    // saved node.next = reversed head
    if (start) {
       start.next = prev; 
    } else {
        head = prev;
    }
    // make sure to reconnect new rightmost with old right.next
    revEnd.next = curr;
    // return head
    return head;
};