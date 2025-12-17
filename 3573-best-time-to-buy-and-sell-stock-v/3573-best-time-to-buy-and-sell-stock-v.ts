function maximumProfit(prices: number[], k: number): number {
    // const states = {
    //     none: 0,
    //     short: 1,
    //     normal: 2
    // };
    const n: number = prices.length;
    const memo: number[][][] = Array(n).fill(null)
    .map(() => Array(k + 1).fill(null)
        .map(() => Array(3).fill(-1)));
    function dp(i: number, j: number, state: number): number {
        // base cases
        // no more transactions left
        if (j === 0) {
            return 0;
        }
        // at first index
        if (i === 0) {
            if (state === 0) {
                return 0;
            } else if (state === 1) {
                return prices[0] * -1;
            } else {
                return prices[0];
            }
        }
        // if memoized return memoed
        // otherwise, calculate
        if (memo[i][j][state] === -1) {
            let price: number = prices[i];
            let res: number = 0;
            if (state === 0) {
                res = Math.max(dp(i - 1, j, 0), Math.max(dp(i - 1, j, 1) + price, dp(i - 1, j, 2) - price));
            } else if (state === 1) {
                res = Math.max(dp(i - 1, j, 1), dp(i - 1, j - 1, 0) - price);
            } else {
                res = Math.max(dp(i - 1, j, 2), dp(i - 1, j - 1, 0) + price);
            }
            memo[i][j][state] = res;
        }
        return memo[i][j][state];
    }
    return dp(n - 1, k, 0);
};