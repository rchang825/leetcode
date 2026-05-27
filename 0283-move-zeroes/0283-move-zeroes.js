/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // two pointers: skipper and curr
    let skipper = 0;
    let curr = 0;
    // iterate through nums using skipper
    while (skipper < nums.length) {
        // if skipper is at 0
        if (nums[skipper] === 0) {
            // move skipper
            skipper++;
        } else {
        // otherwise
            // curr = skipper
            nums[curr] = nums[skipper];
            // move curr
            curr++;
            // move skipper
            skipper++;
        }
    }
    // "move" 0's to the end
    // iterate through from curr to nums
    while (curr < nums.length) {
        // curr = 0
        nums[curr] = 0;
        curr++;
    }
};