/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    // pointer that has second head that will be elements >= x
    // pointer of curr of og list
    // pointer of curr of second list

    // curr of second list.next = null
    // pointer of curr of og list.next = second head
    /*
    [1,4,3,2,5,2] x = 3
    new head = null
    find new head.next with next node < 3
    1 < 3, add to new head, update curr = 1
    curr.next: 4 >= 3, save this, find next node < 3!
        pickup.next = 4, pickup = pickup.next 4
        next = next.next
        next.next: 3 >= 3
        pickup.next = 3, pickup = pickup.next 3
        next = next.next
        next.next: 2 < 3, next = next.next
        
    curr.next: 2 < 3, curr.next = next, curr = curr.next TWO NODES POINT TO 2
    curr.next: 5 >= 5
        pickup.next = 5, pickup = pickup.next 5
        next = next.next
        next.next: 2 < 3, next = next.next
    curr.next: 2 < 3, curr.next = next, curr = curr.next ONLY IF curr.next exists
    curr.next: null, END
    curr.next = pickupHead.next



        
    */
    if (!head) {
        return head;
    }
    let l1 = new ListNode();
    let p1 = l1;
    let l2 = new ListNode();
    let p2 = l2;
    let curr = new ListNode();
    curr.next = head;

    while (curr.next) {
        if (curr.next.val < x) {
            p1.next = curr.next;
            p1 = p1.next;
            curr = curr.next;
        } else {
            // console.log('SKIPPING', curr.next.val);
            p2.next = curr.next;
            p2 = p2.next;
            curr.next = curr.next.next;
        }
    }
    // console.log('curr.next', curr.next);
    // console.log('l2', l2);
    // console.log('l1', l1);
    p2.next = null;
    curr.next = l2.next;
    if (l1.next) {
      return l1.next;  
    }
    return l2.next;
};