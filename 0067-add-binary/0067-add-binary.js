/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
// define res which will be array built backwards
    let res = [];
    // define a carry = boolean that starts off false
    let carry = false;
    // start from the back of a and b
    // find longer string and set it to b
    if (a.length > b.length) {
        let temp = a;
        a = b;
        b = temp;
    }
    // console.log('checking', a, 'against', b);
    // iterate until the end of the longer string (b)
    for (var i = b.length - 1, j = a.length - 1; i >= 0; i--, j--) {
        // if shorter string doesn't have bit, use 0
        let aBit = j < 0 ? 0 : Number(a[j]);
        let bBit = Number(b[i]);
        // if 1 + 1
        // console.log('adding', aBit, '+', bBit, 'with carry of', carry ? 1 : 0);
        if (aBit & bBit) {
            // if carry is true
            if (carry) {
                // push 1
                res.push(1);
            // otherwise 
            } else {
                // set carry to true
                carry = true;
                // push 0
                res.push(0);
            }
        // if 1 + 0 or 0 + 1
        } else if (aBit ^ bBit) {
            // if carry is true
            if (carry) {
                // push 0
                res.push(0);
            // otherwise
            } else {
                // push 1
                res.push(1);
            }
        // if 0 + 0
        } else {
            // if carry is true
            if (carry) {
                // carry is false
                carry = false;
                // push 1
                res.push(1);
            // otherwise
            } else {
                // push 0
                res.push(0);
            }
        }
    }
    // if carry is true
    if (carry) {
        // push final 1
        res.push(1);
    }
    // return res reversed, converted back to string
    return res.reverse().join('');
}