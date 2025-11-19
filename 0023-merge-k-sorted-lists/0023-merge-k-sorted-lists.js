/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let root = new ListNode();
    let curr = root;
    let all = [];
    for (var list of lists) {
        let listPointer = list;
        while (listPointer !== null) {
            all.push(listPointer.val);
            listPointer = listPointer.next;
        }
    }
    all.sort((a,b) => a - b);
    all.forEach((n) => {
        curr.next = new ListNode(n);
        curr = curr.next;
    });
    return root.next;
};