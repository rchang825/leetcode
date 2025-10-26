/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let memo = {};
    memo[0] = 0;

    var dp = function(amount, memo) {
        // console.log('amount', amount);
        let min = Infinity;
        if (amount === 0) {
            return 0;
        }
        if (amount < 0) {
            // console.log('no more coins');
            return -1; // not found
        }
        if (memo.hasOwnProperty(amount)) {
            // console.log('memoized');
            return memo[amount];
        }
        // recursive case
        for (let i = 0; i < coins.length; i++) {
            let curr = dp(amount - coins[i], memo);
            if (curr > -1) {
               min = Math.min(curr + 1, min); 
            }
        }
        if (min === Infinity) {
            memo[amount] = -1;
        } else {
            memo[amount] = min;
        }
        // console.log(`memo[${amount}]: ${memo[amount]}`)
        return memo[amount];
    }

    return dp(amount, memo);
};