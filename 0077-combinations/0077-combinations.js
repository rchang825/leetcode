/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    // define res
    const res = [];
    // backtracking helper(curr, index)
    var backtrack = function(curr, i) {
        // if length of curr = k
        if (curr.length === k) {
            // add to res
            res.push(curr);
        }
        // for each from index + 1 to n
        for (let j = i + 1; j <= n; j++) {
            // call backtrack(curr, new index)
            backtrack([...curr, j], j);
        }
    };
    // loop through from 1 to n
    for (let i = 1; i <= n; i++) {
        // call backtrack([index], index)
        backtrack([i], i);
    }
    // return res
    return res;
};