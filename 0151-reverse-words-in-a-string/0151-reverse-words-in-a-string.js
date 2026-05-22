/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // sanitize string into array of words (no spaces)
    let strArr = s.split(' ').filter((s) => s !== '');
    // iterate through array with two pointers (front and back)
    let front = 0;
    let back = strArr.length - 1;
    while (front < back) {
        [strArr[front], strArr[back]] = [strArr[back], strArr[front]];
        front++;
        back--;
    }
    // return array as string with one space in between
    return strArr.join(' ');
};