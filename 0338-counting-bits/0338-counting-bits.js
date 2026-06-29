/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n + 1);
    ans[0] = 0;
    let square = 1;

    for (let i = 1; i <= n; i++) {
        // if curr = square
        if (i === square * 2) {
            square *= 2;
        }
        // curr - current square = target
        ans[i] = ans[i - square] + 1;
    }

    return ans;
};