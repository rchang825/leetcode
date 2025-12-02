/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    // convert to binary string
    let bin = n.toString(2);
    // pad to 32 bits
    let pad = 32 - bin.length;
    bin = new Array(pad).fill('0').join('') + bin;
    // console.log('og', bin);
    // reverse
    let rev = bin.split('').reverse().join('');
    // console.log('rev', rev);
    // convert back to decimal
    // console.log(parseInt(rev, 2));
    return parseInt(rev, 2);
};