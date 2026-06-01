/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    // sliding window
    // keep track of current number of 0's (compared to k)
    let left = 0;
    let right = 0;
    let flipped = 0;
    let maxLength = 0;
    while (right < nums.length) {
        if (nums[right] === 1) {
            right++;
        } else {
            if (flipped < k) {
                flipped++;
                right++;
            } else {
                maxLength = Math.max(maxLength, right - left);
                while (nums[left] === 1 && left < right) {
                    left++;
                }
                if (nums[left] === 0) {
                    flipped--;
                    left++;
                }
            }
        }
    }
    maxLength = Math.max(maxLength, right - left);

    return maxLength;
};