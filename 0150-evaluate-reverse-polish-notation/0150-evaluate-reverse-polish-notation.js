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
            return val1 - val2;
        },
        '*': (val1, val2) => {
            return val1 * val2;
        },
        '/': (val1, val2) => {
            return Math.trunc(val1 / val2); // always truncates toward zero
        }
    }
    let i = 0;
    while (i < tokens.length) {
        if (operators.hasOwnProperty(tokens[i])) {
            let val2 = stack.pop();
            let val1 = stack.pop();
            let calculation = operators[tokens[i]](parseInt(val1), parseInt(val2));
            console.log(val1, tokens[i], val2, '=', calculation);
            stack.push(calculation);
        } else {
            stack.push(tokens[i]);
        }
        i++;
    }
    return parseInt(stack.pop());
};      