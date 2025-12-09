/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // define memo with base cases
    let memo = [0, 1];
    // helper(n)
    function helper(n) {
        // console.log('for', n);
        // checks if not memoed
        if (memo[n] === undefined) {
            // console.log('not memoed', n);
            // calculates
            // console.log('needs', n - 1, 'and', n - 2);
            let ans = helper(n - 1) + helper(n - 2);
            // memoes
            memo[n] = ans;
        } else {
            // console.log('memoed!', n);
        }
        // return memoed
        return memo[n];
    }

    // call helper(n)
    return helper(n);
}
var fibLazy = function(n) {
    // base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    // recursive case:
    return fib(n - 1) + fib(n - 2);
};