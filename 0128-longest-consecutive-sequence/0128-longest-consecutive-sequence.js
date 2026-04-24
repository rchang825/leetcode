/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // max length = nums.length
    /*
    frequency map of unique integers in nums
    100: 1
    4: 1
    200: 1
    1: 1
    3: 1
    2: 1
    for each: check for consecutive?
    100: check 99 and 101 REMOVE 100
    4: check 3: EXISTS and 5: X REMOVE 3 REMOVE 4
        check 2: EXISTS REMOVE 2
            check 1: EXISTS REMOVE 1
                check 0: X
                update max length if necessary
    200: check 199 and 201: X REMOVE 200
    done, return max length
    */
    const freq = new Map();
    for (let n of nums) {
        if (!freq.has(n)) {
            freq.set(n, true);
        }
    }
    const candidates = Array.from(freq.keys());
    // console.log('candidates', candidates);
    let best = 0;
    for (let i = 0; i < candidates.length; i++) {
        let curr = 1;
        let c = parseInt(candidates[i]);
        if (!freq.get(c)) {
            continue;
        }
        // console.log('candidate', c);
        while (freq.has(c - 1)) {
            // console.log('extending to left!');
            c--;
            freq.set(c, false);
            curr++;
        }
        c = parseInt(candidates[i]);
        while (freq.has(c + 1)) {
            // console.log('extending to right!');
            c++;
            freq.set(c, false);
            curr++;
        }
        best = Math.max(best, curr);
    }
    return best;
};