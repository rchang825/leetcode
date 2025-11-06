/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var expand = function(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
    let left = 0;
    let right = 0;
    for (var i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i + 1);
        let maxLength = Math.max(odd, even);
        if (maxLength > right - left) {
            left = i - Math.floor((maxLength - 1) / 2);
            right = i + Math.floor(maxLength / 2);
        }
    }
    return s.substring(left, right + 1) || '';
};