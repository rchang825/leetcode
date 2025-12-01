/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function(k) {
    // edge case: k is even or multiple of 5
    if (k % 2 === 0 || k % 5 === 0) {
        // impossible, return -1 immediately
        return -1;
    }

    // initialize length of n as 1
    let length = 1;
    // initialize curr as 1
    let curr = 1;
    // curr %= k to avoid overflow
    curr %= k;
    // while curr !== 0 (not divisible)
    // worst case is length = k
    while (curr !== 0) {
        // console.log(curr);
        // if (length === k) {
        //     return curr % k === 0 ? length : -1;
        // }
        // add next multiple of 10 to curr
        curr *= 10;
        curr++;
        curr %= k;
        // increment length
        length++;
        
    }
    // return length
    return length;
};