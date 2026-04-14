/**
 * @param {string} expression
 * @return {string}
 */
var minimizeResult = function(expression) {
    /*
    247+38
    (247+3)8
    (247+38)
    2(47+3)8
    2(47+38)
    24(7+3)8
    24(7+38)

    12+34
    (12+3)4
    (12+34)
    1(2+3)4
    1(2+34)
    */
    // find index of + to enforce positioning rules
        // open paren MUST be before the +
        // closing paren MUST be after the +
        var evaluate = function(curr) {
        let val = 1;
        const openParenIndex = curr.indexOf('(');
        const closeParenIndex = curr.indexOf(')');
        const plusIndex = curr.indexOf('+');
        if (openParenIndex >= plusIndex || plusIndex >= closeParenIndex) {
            // not valid
            return Infinity;
        }
        if (openParenIndex > 0) {
            val *= Number(curr.substring(0, openParenIndex));
        }
        val *= (Number(curr.substring(openParenIndex + 1, plusIndex)) + Number(curr.substring(plusIndex + 1, closeParenIndex)));
        if (closeParenIndex < curr.length - 1) {
            val *= Number(curr.substring(closeParenIndex + 1, curr.length));
        }
        return val;
    }
    let minVal = Infinity;
    let bestExp = `(${expression})`;
    const plusIndex = expression.indexOf('+');
    for (let i = 0; i < plusIndex; i++) {
        for (let j = plusIndex + 2; j <= expression.length; j++) {
            let curr = expression.substring(0,i) + '(' + expression.substring(i,j) + ')' + expression.substring(j);
            let currVal = evaluate(curr);
            if (currVal < minVal) {
                minVal = currVal;
                bestExp = curr;
            }
        }
    }
    return bestExp;
};