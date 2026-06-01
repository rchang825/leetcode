/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let deleted = -1;
    let maxLength = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            if (deleted === -1) {
                deleted = right;
            } else {
                // cannot delete any more
                // save curr length
                maxLength = Math.max(maxLength, right - left - 1);
                // close left until valid again
                left = deleted;
                left++;
                deleted = right;
            }
        }
        right++;
    }
    return Math.max(maxLength, right - left - 1);
};