/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // convert x to a string
    let numStr = x.toString();
    // two pointers from opposite sides
    let left = 0;
    let right = numStr.length - 1;
    // loops while left < right
    while (left < right) {
        // return false early if x at pointers don't match
        if (numStr[left] !== numStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    // return true if loop executes fully
    return true;
};