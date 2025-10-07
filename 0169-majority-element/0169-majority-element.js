/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // naive approach: frequency map and return key with highest number
        // O(N) time and O(N) additional space
    let counts = {};
    nums.forEach((n) => {
        if (counts.hasOwnProperty(n)) {
            counts[n] = counts[n] + 1;
        } else {
            counts[n] = 1;
        }
    });
    let modeCount = 0;
    let mode = null;
    for (var uniqueNum in counts) {
        if (counts[uniqueNum] > modeCount) {
            modeCount = counts[uniqueNum];
            mode = parseInt(uniqueNum);
        }
    }
    return mode;
};