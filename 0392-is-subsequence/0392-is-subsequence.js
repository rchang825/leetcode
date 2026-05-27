/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // two pointers: sPointer and tPointer
    let sPointer = 0;
    let tPointer = 0;
    // iterate through s
    while (sPointer < s.length) {
        // if sPointer and tPointer point to same character
        if (s[sPointer] === t[tPointer]) {
            // move sPointer
            sPointer++;
        }
        // always move tPointer until out of bounds
        if (tPointer < t.length) {
            tPointer++;
        } else {
            return false;
        }
    }
    // return true
    return true;
};