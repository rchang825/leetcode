/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    let operators = {
        '+': (val1, val2) => {
            return val1 + val2;
        },
        '-': (val1, val2) => {
            return val2 - val1;
        },
        '*': (val1, val2) => {
            return val1 * val2;
        },
        '/': (val1, val2) => {
            return Math.trunc(val2 / val1); // always truncates toward zero
        }
    }
    let i = 0;
    while (i < tokens.length) {
        if (operators.hasOwnProperty(tokens[i])) {
            let calculation = operators[tokens[i]](parseInt(stack.pop()), parseInt(stack.pop()));
            // console.log(val1, tokens[i], val2, '=', calculation);
            stack.push(calculation);
        } else {
            stack.push(tokens[i]);
        }
        i++;
    }
    return parseInt(stack.pop());
};      