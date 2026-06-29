/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    // minDistance('horse', 'ros') = minDistance('hors', 'ros') + at most 1

     const dp = new Array(word1.length + 1).fill(0).map(() => new Array(word2.length + 1));
     var helper = function(i, j) {
        if (i === 0) {
            return j;
        }

        if (j === 0) {
            return i;
        }

        if (dp[i][j] !== undefined) {
            return dp[i][j];
        }

        if (word1[i - 1] === word2[j - 1]) {
            // + 0 to prev
            return helper(i - 1, j - 1);
        }

        // replace
        let repl = helper(i - 1, j - 1) + 1;
        // delete
        let del = helper(i - 1, j) + 1;
        // insert
        let ins = helper(i, j - 1) + 1;
        const res = Math.min(repl, del, ins);
        dp[i][j] = res;

        return res;
     }

     return helper(word1.length, word2.length);
};