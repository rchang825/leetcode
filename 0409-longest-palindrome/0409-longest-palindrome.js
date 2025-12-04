/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // palindrome: pairs of letters + at most one extra letter
    // define length
    let length = 0;
    // define map
    const map = {};
    // frequency map of letters in s (case-sensitive)
    for (var i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            // increment frequency
            map[s[i]]++;
            // if a letter has an even frequency or = 2
            if (map[s[i]] % 2 === 0) {
                // increment length by 2
                length += 2;
            } 
        } else {
            // add character to map with initial count of 1
            map[s[i]] = 1;
        }
    }
    // check for at most one extra letter
    // s.length - length = number of odd letters leftover
    // if this > 1
    if (s.length - length >= 1) {
        // increment length
        length++;
    }
    // return length
    return length;
};