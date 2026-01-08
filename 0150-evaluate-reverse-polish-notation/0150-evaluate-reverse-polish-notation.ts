function evalRPN(tokens: string[]): number {
    // check if token is an integer
    function isOperator(token: string): boolean {
        return token === '+' || token === '-' || token === '*' || token === '/';
    }
    // stack of numbers
    const stack: number[] = [];
    // iterate through tokens
    for (let token of tokens) {
        // if num
        if (!isOperator(token)) {
            // add to stack
            stack.push(Number(token));
        // if operator
        } else {
            // apply to first 2 nums off top
            const b = stack.pop();
            const a = stack.pop();
            // append result to top
            switch (token) {
                case '+':
                    stack.push(a + b);
                    break;
                case '-':
                    stack.push(a - b);
                    break;
                case '*':
                    stack.push(a * b);
                    break;
                case '/':
                    stack.push(Math.trunc(a / b));
                    break;
                default:
                    break;
            }
        }
    }
    // return top of stack (final answer)
    return stack[0];
};