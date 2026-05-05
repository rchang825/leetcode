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
var sortList = function(head) {
    // iterate through list and save values
    let curr = head;
    let trav = [];
    while (curr) {
        trav.push(curr.val);
        curr = curr.next;
    }
    // sort array
    trav = trav.sort((a, b) => a - b);
    // convert array to linked list
    let newHead = new ListNode();
    curr = newHead;
    for (let val of trav) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return newHead.next;
};