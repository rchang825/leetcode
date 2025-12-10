function minCostClimbingStairs(cost: number[]): number {
    const n: number = cost.length;
    const dp: number[] = new Array(n);
    // from last step the min cost to get to top is cost of last step
    dp[n - 1] = cost[n - 1];
    // from second to last step the min cost to get to top is cost of last step
    dp[n - 2] = cost[n - 2];
    // from third to last step the min cost is cost of step + min(dp[n - 2], dp[n - 1])
    // console.log(dp);
    for (let i: number = n - 3; i >= 0; i--) {
        // console.log('min cost at', i, 'is the minimum of cost of taking one step', dp[i + 1], 'or two steps', dp[i + 2]);
        dp[i] = cost[i] + Math.min(dp[i + 1], dp[i + 2]);
    }
    return Math.min(dp[0], dp[1]);
};