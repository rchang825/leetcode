/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // string parser to determine what to do next
    // outer loop to iterate through s
    // consider parentheses
    let curr = 0;
    let sign = 1;
    let stack = [];
    let total = 0;
    for (var i = 0; i < s.length; i++) {
        let ch = s[i];
        if (ch >= '0' && ch <= '9') {
            curr = curr * 10 + parseInt(ch);
        } else if (ch === '+') {
            total += sign * curr;
            sign = 1;
            curr = 0;
        } else if (ch === '-') {
            total += sign * curr;
            sign = -1;
            curr = 0;
        } else if (ch === ')') {
            total += sign * curr;
            total *= stack.pop();
            total += stack.pop();
            curr = 0;
        } else if (ch === '(') {
            stack.push(total);
            stack.push(sign);
            sign = 1;
            total = 0;
        } // else 
        // space, do nothing
    }
        
    return total + (sign * curr);
};