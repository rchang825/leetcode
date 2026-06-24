/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // can either start from 0 or 1 min (cost from 0, cost from 1)
    // min cost to get to 0 = 0
    // min cost to get to 1 = 0
    // min cost to get to 2 = min(dp[0] + cost[0], dp[1] + cost[1]) 2 steps or 1 step
    // min cost to get to 3 = min(dp[1] + cost[1], dp[2] + cost[2]);
    // min cost to get to n = min(dp[n - 2] + cost[n - 2], dp[n - 1] + cost[n - 1])
    
    // starting with 2, build to n
    const n = cost.length + 1
    const dp = new Array(n);
    
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }

    return dp[n - 1];
};