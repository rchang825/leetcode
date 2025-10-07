/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // O(1) additional space approach: 
    let mode = -1;
    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (count === 0) {
            mode = nums[i];
            count++;
        } else {
            if (nums[i] === mode) {
                count++;
            } else {
                count--;
            }
        }
    }
    count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === mode) {
            count++;
        }
    }
    if (count > (Math.floor(nums.length / 2))) {
        return mode;
    } 
    return -1;
};
var majorityElementNaive = function(nums) {
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