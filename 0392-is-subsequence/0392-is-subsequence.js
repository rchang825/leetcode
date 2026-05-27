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
        // move tPointer until chars at sPointer and tPointer match
        while (s[sPointer] !== t[tPointer]) {
            tPointer++;
            // if no more characters in t and no full match, return false
            if (tPointer >= t.length) {
                return false;
            }
        }
        // move both pointers forwards
        sPointer++;
        tPointer++;
    }
    // return true
    return true;
};