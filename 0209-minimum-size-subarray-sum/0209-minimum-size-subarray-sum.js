/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let left = 0;
    let right = 1;
    let curr = nums[left];
    if (curr >= target) {
        return 1;
    }
    while (right < nums.length) {
        if (nums[right] >= target) {
            return 1;
        }
        // console.log('curr', curr, '+', nums[right]);
        curr += nums[right];
        if (curr >= target) {
            // console.log('valid subarray from', left, 'to', right, 'spanning', right - left + 1);
            min = Math.min(min, right - left + 1);
            curr -= nums[left] + nums[right];
            left++;
        } else {
            // console.log('keep going!', right);
            right++;
        }
    }
    return min === Infinity ? 0 : min;
};