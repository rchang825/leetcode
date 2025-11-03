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
var removeElements = function(head, val, curr) {
    // console.log('curr', curr);
    if (curr === undefined) {
        // while head exists and should be deleted
        while (head && head.val === val) {
            // head = head.next
            head = head.next;
        }
        curr = head;  
        // console.log('curr = head', curr);
    }
    // base case: curr is null
    if (curr === null) {
        // return the "new" head
        return head;
    } else {
        // set a nextCurr pointer
        // console.log('curr', curr);
        let nextCurr = curr.next;
        // while next node exists and should be deleted
        while (nextCurr && nextCurr.val === val) {
            // move nextCurr pointer
            nextCurr = nextCurr.next;
        }
        // set curr.next to be nextCurr
        curr.next = nextCurr;
        // return removeElements(head, val, curr.next)
        // console.log('going to recurse now! curr = ', curr, 'curr.next=', curr.next);
        return removeElements(head, val, curr.next);
    }
};

var removeElementsIterative = function(head, val) {
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