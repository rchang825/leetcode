/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if (s.length === 1) {
        return 1;
    }
    // frequency map of letters in s (case sensitive!)
    let counts = {};
    for (var i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (counts.hasOwnProperty(ch)) {
            counts[ch] = counts[ch] + 1;
        } else {
            counts[ch] = 1;
        }
    }
    let longestLength = 0;
    // iterate through map
    for (let letter in counts) {
        // if letter frequency > 2, add frequency and update frequency
        if (counts[letter] >= 2) {
            let add = Math.floor(counts[letter] / 2) * 2;
            longestLength += add;
            if (counts[letter] - add === 0) {
                delete counts[letter];
            } else {
                counts[letter] = 1;
            }
        }
    }
    // up to one extra letter that doesn't have pair is allowed
    if (Object.keys(counts).length > 0) {
        return longestLength + 1;
    }
    // return length
    return longestLength;
};