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
    if (list1 === null) {
        if (list2 === null) {
            return list1;
        } else {
            return list2;
        }
    } 
    if (list2 === null) {
        return list1;
    }
    // new mergeList
    let mergeList = new ListNode();
    // two pointers that will iterate through until one or both lists are fulfilled
    let curr1 = list1;
    let curr2 = list2;
    if (curr1.val < curr2.val) {
        // console.log('starting with list1', curr1.val);
        mergeList = new ListNode(curr1.val);
        curr1 = curr1.next;
    } else {
        // console.log('starting with list2', curr2.val);
        mergeList = new ListNode(curr2.val);
        curr2 = curr2.next;
    }
    let curr = mergeList;
    while (curr1 !== null && curr2 !== null) {
        // at each point, add whichever is lesser, or from l2 if equal
        if (curr1.val < curr2.val) {
            // increment pointer that was just added
            // console.log('adding from list1', curr1.val);
            curr.next = new ListNode(curr1.val);
            curr = curr.next;
            curr1 = curr1.next;
        } else {
            // console.log('adding from list2', curr2.val);
            curr.next = new ListNode(curr2.val);
            curr = curr.next;
            curr2 = curr2.next;
        }
    }
    // add the rest of whichever list is still unfinished
    if (curr1 === null) {
        if (curr2 === null) {
            return mergeList;
        } else {
            while (curr2 !== null) {
                // console.log('adding rest of list2', curr2.val);
                curr.next = new ListNode(curr2.val);
                curr = curr.next;
                curr2 = curr2.next;
            }
        }
    } else {
        if (curr2 === null) {
            while (curr1 !== null) {
                // console.log('adding rest of list1', curr1.val);
                curr.next = new ListNode(curr1.val);
                curr = curr.next;
                curr1 = curr1.next;
            }
        }
    }
    // return mergeList
    return mergeList;
};