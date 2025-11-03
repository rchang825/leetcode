/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
    let memo = [];
    memo[0] = true;
    for (var i = 0; i <= s.length; i++) {
        for (var j = 0; j < wordDict.length; j++) {
            let start = i - wordDict[j].length;
            if (start >= 0 && memo[start] && s.substring(start, i) === wordDict[j]) {
                memo[i] = true;
                break;
            }
        }
    }
    return memo[s.length] || false;
};

var wordBreakBad = function(s, wordDict) {
    let curr = [];
    // memoization
    let memo = {};
    // iterating through wordDict, 
    var buildSeq = function(curr) {
        // console.log('curr', curr);
        let currStr = curr.join('');
        if (memo.hasOwnProperty(currStr) && !memo[currStr]) {
            console.log('memoed');
            return false;
        }
        if (currStr.length > s.length) {
            memo[currStr] = false;
            return false;
        }
        // if sequence matches
        if (currStr === s) {
            // return true
            return true;
        } 
        if (currStr === s.substring(0, currStr.length)) {
            for (var i = 0; i < wordDict.length; i++) {
                // build temp sequences
                // backtracking
                curr.push(wordDict[i]);
                if (buildSeq(curr)) {
                    return true;
                } 
                curr.pop();
            }
        } 
        return false;
    };
    return buildSeq(curr);
};