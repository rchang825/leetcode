/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {

    // skip whitespace
    s = s.trim();
    // console.log(s);
    // declare a positive flag that will be false if next char is '-'
    let pos = true;
    let i = 0;
    // if next char is '-' or '+', skip it
    if (s[i] === '-' || s[i] === '+') {
        // console.log('neg');
        if (s[i] === '-') {
            pos = false;
        }
        i++;
        // skip leading zeroes (while loop)
        while (i < s.length && s[i] === '0') {
            i++;
        }
    } 
    // save the start index of integer
    let left = i;
    // save the end index of integer (while loop until eos or non-digit char)
    while (i < s.length && s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
        i++;
    }
    let right = i - 1;
    // console.log('left', left, 'right', right, s.slice(left, right));

    // declare exp variable (0)
    let exp = 0;
    // declare res variable (0)
    let int = 0;
    // iterate through int array backwards
    while (right >= left) {
        // res += curr * 10^exp
        int += (s.charCodeAt(right) - 48) * 10**exp;
        // exp++
        exp++;
        right--;
    }
    // check for overflow -> round
    int = pos ? int : int * -1;
    if (int < 0 && int < -2147483648) {
        return -2147483648;
    }
    if (int > 0 && int > 2147483647) {
        return 2147483647;
    }
    // return res with sign
    return int;
};