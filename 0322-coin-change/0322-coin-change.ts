function coinChange(coins: number[], amount: number): number {
    // assume coins are sorted?
    coins.sort((a,b) => a - b);
    // memoization
    const memo: number[] = new Array(amount);
    // helper function (amount)
    function numCoins(amount: number) {
        // base cases: amount = 0 or cannot proceed with coins
        if (amount === 0) {
            return 0;
        } else if (amount < 0) {
            return -1;
        }
        // if memoed return memoed
        if (memo[amount]) {
            return memo[amount];
        }
        // otherwise
        // define a min res
        let minCount: number = Infinity;
        // iterate through coin options
        for (let c of coins) {
            // use up coin and calculate res for that modified amount
            let currCount: number = numCoins(amount - c);
            // update min if necessary
            if (currCount !== -1) {
                minCount = Math.min(currCount + 1, minCount);
            }
        }
        // update memo[amount] with min for amount or -1
        memo[amount] = minCount === Infinity ? -1 : minCount;
        // return memoed res
        return memo[amount];
    }
    // call helper function with input amount
    return numCoins(amount);
};