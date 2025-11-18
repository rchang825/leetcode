/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
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