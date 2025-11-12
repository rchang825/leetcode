/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // special case: length of s is odd -> can't be valid
  if (s.length % 2 === 1) {
    return false;
  }
  // define complements
  let closing = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  let stack = [];
  // iterate through s
  for (var i = 0; i < s.length; i++) {
    // while current character is an opening parenthesis
    if (closing.hasOwnProperty(s[i])) {
        // push onto stack
        stack.push(s[i]);
    } else {
        // at this point the first element off the stack must correspond to the next closing parenthesis
        // if that is true, pop the first element off
        let curr = stack[stack.length - 1];
        if (curr && closing[curr] === s[i]) {
            stack.pop();
        } else {
            return false;
        }
    }
  }
  // if the stack is empty
    // return true
  // otherwise, that means there are unclosed parentheses
    // return false
    return stack.length === 0;
};