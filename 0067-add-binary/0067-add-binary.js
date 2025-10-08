/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (a === '0') {
        return b;
    }
    if (b === '0') {
        return a;
    }
    // naive approach: convert binary to dec, add, then convert dec to binary
    // will exceed integer constraints
    // two pointers looking backwards
    // carry if sum = 2
    let aPointer = a.length - 1;
    let bPointer = b.length - 1;
    let carry = 0;
    let sum = [];
    while (aPointer >= 0 || bPointer >= 0) {
        let aCurr = aPointer >= 0 ? a.charAt(aPointer) : '0';
        let bCurr = bPointer >= 0 ? b.charAt(bPointer) : '0';
        if (aCurr === '1' && bCurr === '1') {
            if (carry === 0) {
                carry = 1;
                sum.push('0');
            } else {
                sum.push('1');
            }

        } else if (aCurr === '0' && bCurr === '0') {
            if (carry === 0) {
                sum.push('0');
            } else {
                carry = 0;
                sum.push('1');
            }
        } else {
            if (carry === 0) {
                sum.push('1');
            } else {
                sum.push('0');
            }
        }
        aPointer--;
        bPointer--;
    }
    // remember last carry
    if (carry === 1) {
        sum.push('1');
    }
    return sum.reverse().join('');
};