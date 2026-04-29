/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var length = function(list) {
    let curr = list;
    let l = 0;
    while (curr) {
        curr = curr.next;
        l++;
    }
    return l;
}
var rotateRight = function(head, k) {
    if (!head || k === 0) {
        return head;
    }
    // find length of list
    let l = length(head);
    k %= l;
    if (k === 0) {
        return head;
    }
    // two pointers, fast one is k % length ahead of slow
    let slow = head;
    let fast = head;
    
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    let newHead = slow.next;
    // console.log('new head starts at', newHead);
    slow.next = null;
    // console.log('previous last node', fast);
    fast.next = head;
    return newHead;
};