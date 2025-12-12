/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    // backtracking
    let res = [];

    var makeComb = function(curr, currSum, index) {
        // console.log('currSum', currSum, 'curr', curr);
        if (currSum === target) {
            // console.log('combination found!', curr);
            res.push(curr);
        }
        if (currSum > target) {
            return;
        }
        for (var i = index; i < candidates.length; i++) {
            // curr.push(candidates[i]);
            makeComb([...curr, candidates[i]], currSum + candidates[i], i);
            // curr.pop();
        }
    }
    for (var i = 0; i < candidates.length; i++) {
        makeComb([candidates[i]], candidates[i], i);
    }

    return res;
};