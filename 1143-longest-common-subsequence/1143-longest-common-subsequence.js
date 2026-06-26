/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1.length === 0 || text2.length === 0) {
        return 0;
    }

    let dp = Array.from({ length: text1.length + 1 }, () => new Array(text2.length + 1));
    for (let i = 0; i <= text1.length; i++) {
        for (let j = 0; j <= text2.length; j++) {
            if (i === text1.length || j === text2.length) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = -1;
            }
        }
    }

    var helper = function(i, j) {
        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        let res = 0;
        if (text1[i] === text2[j]) { // include
            res = helper(i + 1, j + 1) + 1;
        } else { // exclude
            res = Math.max(helper(i + 1, j), helper(i, j + 1));
        }
        
        dp[i][j] = res;
        return res;
    }

    return helper(0, 0);
};