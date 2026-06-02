/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    // stack of characters
    let stack = [];
    // iterate through s
    for (let i = 0; i < s.length; i++) {
        // if *, pop top off stack (do not push * to stack)
        if (s[i] === '*') {
            stack.pop();
        } else {
        // otherwise, push char to stack
            stack.push(s[i]);
        }
    }
    // convert stack to string and return
    return stack.join('');
};