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
var deleteDuplicates = function(head) {
    if (!head) {
        return head;
    }
    let prev = head;
    let curr = head.next;
    let last = null;

    while (curr) {
        if (prev.val !== curr.val) {
            last = prev;
            prev = prev.next;
            curr = curr.next;
        } else {
            while (curr && (prev.val === curr.val)) {
                // console.log('DUPE', curr.val);
                curr = curr.next;
            }
            if (!last) {
                // console.log('deleting head');
                head = curr;
            } else {
               last.next = curr; 
            }
            prev = curr;
            if (curr) {
                curr = curr.next;
            }
        }
    }

    return head;
};