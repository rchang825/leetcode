/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let p1 = list1;
    let p2 = list2;
    let root = new ListNode(-1);
    let curr = root;
    while (p1 !== null && p2 !== null) {
        if (p1.val <= p2.val) {
            curr.next = p1;
            curr = curr.next;
            p1 = p1.next;
        } else {
            curr.next = p2;
            curr = curr.next;
            p2 = p2.next;
        }
    }
    if (p1 === null) {
        curr.next = p2;
    } else {
        curr.next = p1;
    } 
    return root.next;
};
