/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let createCombination = function(i, curr, currSum) {
        if (currSum === target) {
            res.push([...curr]);
            return;
        }
        if (currSum > target || i >= candidates.length) {
            // out of bounds
            return;
        }
        curr.push(candidates[i]);
        // try adding same element again
        createCombination(i, curr, currSum + candidates[i]);
        curr.pop();
        // move onto next element
        createCombination(i + 1, curr, currSum);
    };
    createCombination(0, [], 0);
    return res;
};