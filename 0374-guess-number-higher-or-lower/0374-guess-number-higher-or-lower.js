/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, leftStart = 0) {
    // binary search that doesn't include direct comparison
    // left, right, always guess mid and then move left/right accordingly
    let mid = Math.floor((leftStart + n) / 2);
    let comparator = guess(mid);
    if (comparator === -1) {
        // go left
        return guessNumber(mid);
    } else if (comparator === 1) {
        // go right
        return guessNumber(n, mid + 1);
    } else {
        return mid;
    }
};