/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var length = function(list) {
    let curr = list;
    let l = 0;
    while (curr.next) {
        curr = curr.next;
        l++;
    }
    return l;
}
var addTwoNumbers = function(l1, l2) {
    /*
    2- 4- 3 -> 342
    5- 6- 4 -> 465
    7- 0- 8
    treat the lists like they are "left aligned"
    2- 4- 3 -> 342
    5- 6 __ -> 65

    7- 0- 4 -> 407
    2 + 5 = 7
    4 + 6 = 10 -> 0 with carry of 1
    no element for shorter list (use 0) 3 + 0 + carry = 4
    */
    // check lengths of l1 and l2 (swap so l1 is shorter or equal length)
    let length1 = length(l1);
    let length2 = length(l2);
    if (length2 < length1) {
        [l1, l2] = [l2, l1];
        [length1, length2] = [length2, length1];
    }
    // define res list with a dummy value
    const res = new ListNode();
    // set pointers for all 3 lists
    let curr = res;
    let p1 = l1;
    let p2 = l2;
    
    // initialize carry as 0
    let carry = 0;
    // iterate from 0 to length of longer list
    for (let i = 0; i <= length2; i++) {
        // sum = l1 node OR 0 + l2 node + carry
        let addend1 = p1 ? p1.val : 0;
        let sum = addend1 + p2.val + carry;
        // console.log(`${addend1} + ${p2.val} + ${carry} = ${sum}`);
        // if sum > 9, 
        if (sum > 9) {
            // sum -= 10
            sum -= 10;
            // set carry to 1
            carry = 1;
        } else {
        // otherwise, set carry to 0
            carry = 0;
        }
        // add sum to res list as node
        // console.log('node is', sum, 'carry of', carry);
        curr.next = new ListNode(sum);
        // move pointers
        curr = curr.next;
        if (p1) {
           p1 = p1.next; 
        }
        p2 = p2.next;
    }
    // add carry if it exists
    if (carry) {
        curr.next = new ListNode(1);
    }
    // return res list.next (skip dummy value)
    return res.next;
};