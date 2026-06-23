/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res = [];
    var makeCombination = function(curr, sum) {
        if (sum === n && curr.length === k) {
            res.push(curr);
            return;
        }
        let start = curr.length > 0 ? curr[curr.length - 1] : 0;
        for (let i = start + 1; i <= 9 && i <= n - sum; i++) {
            makeCombination([...curr, i], sum + i);
        }
    }
    makeCombination([], 0);
    return res;
};