/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // break up string into array of words divided by spaces
    let almost = s.split(' ');
    // traverse from back to find last word
    for (let i = almost.length - 1; i >= 0; i--) {
        if (almost[i] !== '') {
            // return length of last word
            return almost[i].length;
        }
    }
    

};