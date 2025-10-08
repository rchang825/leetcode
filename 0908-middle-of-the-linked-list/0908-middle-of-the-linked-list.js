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
    let i = 0;
    let curr = head;
    // iterate through to find length of list
    while (curr !== null) {
        i++;
        curr = curr.next;
    }
    // middle node is at index Math.floor(length / 2)
    let midIndex = Math.floor(i / 2);
    // console.log('midIndex', midIndex);
    i = 0;
    curr = head;
    // iterate through until reached that index
    while (i < midIndex) {
        curr = curr.next;
        i++;
    }
    // return curr
    return curr;
};