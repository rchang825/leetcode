/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // I: number (of pairs)
    // O: array of strings, each string contains well-formed parentheses
    // C: number of pairs is at least 1 and no more than 8
    // E: 
    

    // n = 1
    // "()"
    // n = 2
    // "()" -> "()()", adding on another set
    // "()" -> (())", nesting
    // n = 3
    // "()()" -> "()()()", adding on another set
    // "(())" -> "(())()", adding on another set
    // "(())" -> "()(())", adding on another set
    // "(())" -> "((()))", 
    //           "(()())"

    /*
        given ()
        insert ()
        - end ()()
        - beginning -> duplicate ()()
        - inside (())
        given ()()
        insert ()
        - end ()()()
        - beginning -> duplicate ()()()
        - inside (())()
        - inside ()(())
        - outside (()())

        ( -> (( or ()
        (( -> ((( or (()
        (() -> (()( or (())
        () -> ()(
        put in all possible places for open parentheses
        fill in with closing parentheses
        n = 3
        (----)

        (((--- -> ((())) 
        ((-(-- 
        ((--(-
        (-((--
        (-(-(-

        ())(()
        (--((-

        n = 4
        ((((----

        1st open paren up to i = 0 (1st spot) 2 * 1 - 1
        ((--|----
        (-(-|---- 2nd open paren up to i = 2 (3rd spot) 2 * 2 - 1
        ((--(--- (())()() 3rd open paren up to i = 4 (5th spot) 2 * 4 - 1
        2 * (numOpen + 1)
        n = 1
        (-
    */
    // define a res array
    let res = [];
    // define length as n * 2
    let length = n * 2;
    // keep track of i (where you're fixing open paren)
    // helper (curr, i, numOpen)
    var helper = function(curr, i, numOpen) {
        // console.log('curr starts off', curr.join(''));
        // if numOpen is 0, 
        // fix the character as ( at i
        // console.log('adding new open paren at', i);
        curr[i] = '('
        // if number of open paren == n
        if (numOpen + 1 === n) {
            // fill in empty spaces with closed paren
            for (var j = 0; j < length; j++) {
                if (curr[j] !== '(') {
                    curr[j] = ')';
                }
            }
            // console.log('adding to res', curr.join(''));
            // convert curr to string, add to res array
            res.push(curr.join(''));
        } else {
            // otherwise, from i + 1 to length - 1, 
            // call helper(curr, new index)
            for (var k = i + 1; k <= 2 * (numOpen + 1); k++) {
                // console.log('recursing to add another open paren');
                helper(curr.slice(), k, numOpen + 1);
            }
        }
    }
    // call the helper starting with curr = [] with size = length, i = 0
    helper(new Array(length), 0, 0);
    // return res
    return res;
};