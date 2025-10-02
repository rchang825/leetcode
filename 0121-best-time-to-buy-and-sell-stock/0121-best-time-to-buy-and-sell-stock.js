/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // profit defaults to 0
    if (prices.length === 0) {
        return 0;
    }
    let profit = 0;
    let cheapest = prices[0];
    for (var i = 0; i < prices.length; i++) {
        cheapest = Math.min(cheapest, prices[i]);
        profit = Math.max(profit, (prices[i] - cheapest));
    }
    return profit;
};
    // for (var i = 0; i < prices.length; i++) {
    //     for (var j = i; j < prices.length; j++) {
    //         profit = Math.max(profit, (prices[j] - prices[i]));
    //     }
    // }