/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // ans starts off as [0]
    let ans = [0];
    // keep track of current starting bit (starting at 1)
    let sq = 1;

    // iterate from 1 to n
    for (var i = 1; i <= n; i++) {
        // if curr = next square
        if (i === sq * 2) {
            // update current square
            sq *= 2;
        }
        // curr - current square = target
        // num bits = memoed target num bits + 1
        ans[i] = 1 + ans[i - sq];
    }
    // return ans
    return ans;
};