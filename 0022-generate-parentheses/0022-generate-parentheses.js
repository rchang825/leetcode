/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // define a res array
    let res = [];
    // define length as n * 2
    let length = n * 2;
    // keep track of i (where you're fixing open paren)
    // helper (curr, i, numOpen)
    var helper = function(curr, i, numOpen) {
        // if numOpen is 0, 
        // fix the character as ( at i
        curr[i] = '('
        // if number of open paren == n
        if (numOpen + 1 === n) {
            // fill in empty spaces with closed paren
            for (var j = 0; j < length; j++) {
                if (curr[j] !== '(') {
                    curr[j] = ')';
                }
            }
            // convert curr to string, add to res array
            res.push(curr.join(''));
        } else {
            // otherwise, from i + 1 to length - 1, 
            // call helper(curr, new index)
            for (var k = i + 1; k <= 2 * (numOpen + 1); k++) {
                helper(curr.slice(), k, numOpen + 1);
            }
        }
    }
    // call the helper starting with curr = [] with size = length, i = 0
    helper(new Array(length), 0, 0);
    // return res
    return res;
};