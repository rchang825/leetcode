/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) {
        return s.length;
    }
    // frequency map that gets reinitialized
    let counts = {};
    // sliding window:
    let left = 0;
    let right = 1;
    let maxLength = 0;
    counts[s.charAt(0)] = 1;
    while (right < s.length) {
        if (counts.hasOwnProperty(s.charAt(right))) {
            // close window from left until right is add-able
            while (counts.hasOwnProperty(s.charAt(right)) && left < right) {
                delete counts[s.charAt(left)];
                left++;
            }
        }
        counts[s.charAt(right)] = 1;
        maxLength = Math.max(maxLength, right-left + 1);
        right++;
    }
    return maxLength;
};
var lengthOfLongestSubstringBrute = function(s) {
    // frequency map that gets reinitialized
    let counts = {};
    // brute force: iterate through all substrings
    // sliding window: o
    let maxLength = 0;
    let invalid = false;
    for (var i = 0; i< s.length; i++) {
        counts = {};
        invalid = false;
        for (var j = i; j < s.length; j++) {
            if (counts.hasOwnProperty(s.charAt(j))) {
                invalid = true;;
            } else {
                if (!invalid) {
                    counts[s.charAt(j)] = 1;
                }
            }
        }
        maxLength = Math.max(maxLength, Object.keys(counts).length);
    }
    return maxLength;
};