/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let map = {};
    for (var i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            map[s[i]].push(i);
        } else {
            map[s[i]] = [i];
        }
    }
    var helper = function(start, end) {
        let uniqueCh = new Array(26).fill(0);
        let aCode = 'a'.charCodeAt(0);
        let count = 0;
        start++;
        while (start < end) {
            if (!uniqueCh[s.charCodeAt(start) - aCode]) {
                uniqueCh[s.charCodeAt(start) - aCode] = 1;
                count++;
            }
            start++;
        }
        return count;
    }
    // subsequence maintains relative order of chars
    // iterate and find "sandwiching" pairs
    let chars = new Array(26);
    let count = 0;
    // two pointers
    for (let [ch, indices] of Object.entries(map)) {
        if (indices.length >= 2) {
            count += helper(indices[0], indices[indices.length - 1]);
        }
    }
    return count;
};