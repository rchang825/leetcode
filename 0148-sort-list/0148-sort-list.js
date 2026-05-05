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
    // divide and conquer with merge sort
    // need middle element
    var findMiddle = function(curr) {
        let fast = curr;
        let slow = curr;
        let prev = null;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        return slow;
    }
    var merge = function(l1, l2) {
        let newHead = new ListNode();
        let curr = newHead;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        if (l1) {
            curr.next = l1;
        } else {
            curr.next = l2;
        }
        return newHead.next;
    }
    if (!head || !head.next) {
        return head;
    }
    let mid = findMiddle(head);
    let left = sortList(head);
    let right = sortList(mid);
    return merge(left, right);
};
var sortListA = function(head) {
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