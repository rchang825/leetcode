/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var reverse = function(head) {
    if (!head) {
        return head;
    }

    let prev = null;
    let next = null;
    let curr = head;
    while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
var pairSum = function(head) {
    // separate out twin half of list, reverse
    // get to halfway point with two pointers
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let reversed = reverse(slow);
    slow = null;
    // iterate through twins and keep track of max sum
    let max = 0;
    slow = head;
    fast = reversed;
    while (fast) {
        max = Math.max(slow.val + fast.val, max);
        fast = fast.next;
        slow = slow.next;
    }
    return max;
};