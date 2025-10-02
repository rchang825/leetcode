/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphaNumeric = function(ch) {
    // const regex = /^[a-zA-Z0-9]$/;
    // return regex.test(char);
    let ascii = ch.charCodeAt(0);
    // nums: >= 48, <= 57
    // caps: >= 65, <= 90
    // lc: >= 97, <= 122
    if (ascii > 122) {
        return false;
    }
    if (ascii < 48) {
        return false;
    }
    if (ascii > 57 && ascii < 65) {
        return false;
    }
    if (ascii > 90 && ascii < 97) {
        return false;
    }
    return true;
}
var isPalindrome = function(s) {
    // remove spaces and punctuation from string, convert to lowercase
    let lowercase = s.toLowerCase();
    let concat = [];
    for(let i = 0; i < lowercase.length; i++) {
        if (isAlphaNumeric(lowercase.charAt(i))) {
            concat.push(lowercase.charAt(i));
        }
    }
    // console.log('only alphanumeric', concat.join(''));
    let left;
    let right;
    // if length is odd
    if (concat.length % 2 === 1) {
        // start two pointers at same spot in middle
        left = Math.floor(concat.length / 2);
        right = left;
    } else {
    // else (length is even)
        // start two pointers next to each other in middle
        right = concat.length / 2;
        left = right - 1;
    }
    // while left and right are not at end
    while (left >= 0 && right < concat.length) {
        // if str[left] !== str[right]
        if (concat[left] !== concat[right]) {
            // return false early
            // console.log(concat[left], 'does not match', concat[right]);
            return false;
        }
        left--;
        right++;
    }
    // return true
    return true;
};