/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    // leading zeroes -> not valid
    /*
        11106
        1 -> (1) = 1
        11 -> (1 + 1), (11) = 2
        111 -> (1 + 1 + 1), (11 + 1), (1 + 11)
        1110 -> _(1 + 1 + 1 + 0)_, (11 + 10), (1 + 1 + 10), _(1 + 11 + 0)_
        11106 -> (11 + 10 + 6), (1 + 1 + 10 + 6)
    */
    // need the previous 2 to make a new combination and prune out bad combinations (leading 0's, > 26)
    const n = s.length;
    const dp = new Array(n);
    // edge case: starts with 0 -> immediately return
    if (s[0] === '0') {
        return 0;
    }
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        // console.log('at i =', i);
        let curr = 0;
        let digit = s[i];
        // single adds
        // console.log('considering single digit', digit);
        if (digit !== '0') {
            // console.log('digit valid, use dp[i - 1]');
            curr += dp[i - 1];
        }
        // double adds
        let dbl = parseInt(s.substring(i - 1, i + 1));
        // console.log('considering double digit', dbl);
        if (dbl <= 26 && dbl > 9) {
            // console.log('digits valid, use dp[i - 2]');
            if (i === 1) {
                // console.log('i - 2 doesn\'t exist, using 1');
                curr++;
            } else {
                curr += dp[i - 2];
            }
        }
        // console.log(`dp[${i}] is ${curr}`);
        dp[i] = curr;
    }
    // return final count
    return dp[n - 1];
};