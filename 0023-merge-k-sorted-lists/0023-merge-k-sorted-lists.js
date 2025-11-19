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
    var mergeLists = function(list1, list2) {
        if (list1 === null) {
            return list2;
        }
        if (list2 === null) {
            return list1;
        }
        let p1 = list1;
        let p2 = list2;
        if (list2.val < list1.val) {
            p1 = list2;
            p2 = list1;
        }
        let root = new ListNode();
        let curr = root;
        while (p1 !== null && p2 !== null) {
            if (p1.val < p2.val) {
                curr.next = p1;
                p1 = p1.next;
                curr = curr.next;
            } else {
                curr.next = p2;
                p2 = p2.next;
                curr = curr.next;
            }
        }
        if (p1 === null) {
            curr.next = p2;
        } else {
            curr.next = p1;
        }
        
        return root.next;
    };
    if (lists.length === 0) {
        return null;
    }
    let root = new ListNode();
    let curr = root;
    let numLists = lists.length;
    let interval = 1;
    while (interval < numLists) {
        // console.log(lists);
        for (var i = 0; i < numLists - interval; i += interval * 2) {
            lists[i] = mergeLists(lists[i], lists[i + interval]);
        }
        interval *= 2;
    }
    return lists[0];
};