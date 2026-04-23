/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    /* brute force
    keep track of min
    start at left
    if < target, keep opening to the right
    if >= target, update min
    close from left
    if < target, keep opening to the right
    if >= target, update min
    ...
    return min
    */
    let min = Infinity;
    let left = 0;
    let right = 1;
    let curr = nums[left];
    if (curr >= target) {
        return 1;
    }
    while (left < nums.length && right < nums.length) {
        if (nums[right] >= target) {
            return 1;
        }
        // console.log('curr', curr, '+', nums[right]);
        curr += nums[right];
        if (curr >= target) {
            // console.log('valid subarray from', left, 'to', right, 'spanning', right - left + 1);
            min = Math.min(min, right - left + 1);
            curr -= nums[left];
            left++;
            right = left + 1;
            curr = nums[left];
        } else {
            // console.log('keep going!', right);
            right++;
        }
    }
    return min === Infinity ? 0 : min;
};