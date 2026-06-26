/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let sell = new Array(prices.length);
    let buy = new Array(prices.length);
    sell[0] = 0;
    buy[0] = 0 - prices[0];

    for (let day = 1; day < prices.length; day++) {
        sell[day] = Math.max(sell[day - 1], buy[day - 1] + prices[day] - fee);
        buy[day] = Math.max(buy[day - 1], sell[day - 1] - prices[day]);
    }
    return sell[prices.length - 1];
};