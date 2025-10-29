/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let power = 0;
    while (n >= 2 ** power) {
        power++;
    }
    return 2 ** power - 1;
}
var smallestNumberBrute = function(n) {
    // convert n to binary rep as a string
    let binaryArr = n.toString(2).split('');
    // set all 0's to 1's
    for (var i = 0; i < binaryArr.length; i++) {
        if (binaryArr[i] === '0') {
            binaryArr[i] = '1';
        }
    }
    // convert back to decimal
    return parseInt(binaryArr.join(''), 2);
};