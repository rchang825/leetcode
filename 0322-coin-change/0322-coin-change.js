/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // memoization (top-down dynamic programming)
    let memo = {};
    var numCoins = function(amount, memo) {
        // console.log('amount', amount);
        // 0
        if (amount === 0) {
            return 0;
        }
        // -1
        if (amount < 0) {
            // impossible
            // console.log('no more coins left');
            memo[amount] = -1;
            return -1;
        }
        // already memoized
        if (memo.hasOwnProperty(amount)) {
            // console.log('already memoed', amount);
            return memo[amount];
        }
        // iterate through the options of coins, 
        // calculate numCoins for each variation
        // update min whenever a better number is found
        let minCount = Infinity;
        for (var i = 0; i < coins.length; i++) {
            // console.log('checking', amount, '-', coin);
            let curr = numCoins(amount - coins[i], memo);
            // console.log('num for', amount - coin, 'is', curr);
            if (curr != -1) {
                // otherwise, update min if necessary
                minCount = Math.min(curr + 1, minCount);
                // console.log('min', minCount);
            }
        }
        if (minCount !== Infinity) {
            // console.log('memoizing', amount);
            memo[amount] = minCount; // best number at each point gets memoized
        } else {
            memo[amount] = -1;
        }
        return memo[amount];
        
        // console.log(`memo[${amount}]: ${memo[amount]}`);
        
    };
    return numCoins(amount, memo);
};