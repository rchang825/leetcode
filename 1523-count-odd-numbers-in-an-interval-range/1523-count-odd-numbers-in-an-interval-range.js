/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // 3, 4, 5, 6, 7, 8
    // define res
    let totalNums = high - low + 1;
    // if low is odd, 
    if (low % 2 === 1) {
        // count total nums / 2, rounded up
        return Math.ceil(totalNums / 2);
    }
    // otherwise
        // count total nums / 2, rounded down
    return Math.floor(totalNums / 2);
};