/**
 * @param {number[]} complexity
 * @return {number}
 */
var countPermutations = function(complexity) {
    const n = complexity.length;
    const MOD = 10 ** 9 + 7;
    // complexity[0] is decoded
    const first = complexity[0];
    // edge case: complexity[0] is duped or not the minimum
    for(var i = 1; i < n; i++) {
        if (complexity[i] <= first) {
            // return 0
            return 0;
        }
    }

    // factorial helper function
    function factorial(n) {
        if (n <= 1) {
            return 1;
        }
        return n * factorial(n - 1) % MOD;
    }

    return factorial(n - 1);
};