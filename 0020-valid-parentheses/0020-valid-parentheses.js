/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let opening = {'(' : ')', '{': '}', '[': ']'};
    // stack of characters
    let stack = [];
    // iterate through all characters in s
    let i = 0;
    while (i < s.length) {
        // while not on closing char, add to stack
        if (opening.hasOwnProperty(s.charAt(i))) {
            stack.push(s.charAt(i));
        }
        
        else {
            // while still on closing chars, check if it is the counterpart to stack.pop
            if (opening[stack.pop()] !== s.charAt(i)) {
                // if not, return false
                // console.log('does not match!!')
                return false;
            }
        }
        i++;
    }
    // return true if stack is empty
    if (stack.length === 0) {
        return true;
    } 
    // console.log('open chars remaining!')
    return false;
};