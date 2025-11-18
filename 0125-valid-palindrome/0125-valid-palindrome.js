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
    // console.log(strArr.join(''));
    let mid = Math.floor(strArr.length / 2);
    // console.log(strArr.slice(0, mid + 1).join(''));
    // console.log(strArr.slice(mid).reverse().join(''));
    return strArr.slice().join('') === strArr.slice().reverse().join('');
};