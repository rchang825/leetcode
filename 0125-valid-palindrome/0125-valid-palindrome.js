/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var isValidChar = function(ch) {
        return (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || (ch >= 'A' && ch <= 'Z');
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isValidChar(s[left])) {
            left++;
        };
        while (left < right && !isValidChar(s[right])) {
            right--;
        }
        if ((s[left] + '').toLowerCase() !== (s[right] + '').toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
var isPalindromeReverse = function(s) {
    s = s.toLowerCase();
    let strArr = [];
    // iterate through s to remove non-alphanumeric chars and convert to lowercase
    for (var i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch >= 'a' && ch <= 'z' || (ch >= '0' && ch <= '9')) {
            strArr.push(ch);
        }
    }
    // palindromes are the same forwards and backwards
    return strArr.slice().join('') === strArr.slice().reverse().join('');
};