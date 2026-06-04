/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    // stack
    // add to stack until closed bracket
    // pop off to form substring until number
    // substring repeated numReps times
    // push decoded substring back onto stack
    /*
    accaccacc

    substring: c repeated 2x
    substring: acc repeated 3x
    final item on stack = decoded string
    */
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        // closed bracket: process
        if (s[i] === ']') {
            // process: pop off chars
            let subArr = [];
            while (!Number.isInteger(Number(stack[stack.length - 1]))) {
                let curr = stack.pop();
                if (curr !== '[') {
                    subArr.push(curr); // building substring in reverse
                }
            }
            const substr = subArr.reverse().join('');
            // pop off digits to get numReps
            let numReps = 0;
            let power = 0;
            while (Number.isInteger(Number(stack[stack.length - 1]))) {
                numReps += Number(stack.pop()) * (10 ** power);
                power++;
            }
            // decode substring fully and add back to stack
            // console.log(substr, 'repeated', numReps, 'times');
            let decodedArr = new Array(numReps).fill(substr);
            stack.push(decodedArr.join(''));
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};