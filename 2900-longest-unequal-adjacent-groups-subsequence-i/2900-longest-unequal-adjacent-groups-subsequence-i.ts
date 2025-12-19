function getLongestSubsequenceTLE(words: string[], groups: number[]): string[] {
    const n: number = words.length;
    let maxLength: number = 0;
    let res: string[] = [];

    function helper(curr: string[], index: number): void {
        if (index === 0 || (groups[index] !== groups[index - 1])) {
            // can continue subsequence
            curr.push(words[index]);
            // update max
            if (curr.length > maxLength) {
                maxLength = curr.length;
                res = curr.slice();
            }
            for (let i: number = index + 1; i < n; i++) {
                helper(curr.slice(), i);
            }
            curr.pop();
        } 
    };
    helper([], 0);
    return res;
};
function getLongestSubsequence(words: string[], groups: number[]): string[] {
    // either can add to sequence of prev best or cannot add, = sequence of prev best
    // dp[0] = e
    // dp[1] = can add to dp[0]? no, = e
    // dp[2] = can add to dp[1]? yes, = e-b
    const n = words.length;
    // iterate through all words from 1 - n
    // start res with [words[0]], flag = groups[0]
    let res: string[] = [words[0]];
    let flag: boolean = groups[0] === 1;
    for (let i: number = 1; i < n; i++) {
        // if flag does not match curr
        if (flag && groups[i] === 0 || (!flag && groups[i] === 1)) {
            // sequence can continue (update prev, flip flag)
            res.push(words[i]);
            flag = !flag;
        }
    }
    return res;
}