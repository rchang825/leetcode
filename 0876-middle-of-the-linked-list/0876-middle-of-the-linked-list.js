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
var middleNode = function(head) {
    /* 
        two pointers: fast and slow
        every time fast pointer moves twice, 
        slow pointer only moves once
    */
    // define pointers
    let slow = head;
    let fast = head;
    // iterate through list until fast pointer is at last node
    while (fast && fast.next) {
        // slow + 1
        slow = slow.next;
        // fast + 2 if possible
        fast = fast.next;
        if (fast) {
            fast = fast.next;
        }
    }
    // slow pointer will be the middle node
    return slow;
};