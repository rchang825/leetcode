/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // I: array of numbers (representing red, white, blue), 0, 1, 2
    // O: sorted array (modify existing array)
    // C: sorting in-place, aiming for one pass and constant space
        // colors will be in order red, white, blue (0, 1, 2)
    // E: single element in nums -> nothing happens

    const n = nums.length;
    let left = 0;
    let right = n - 1;
    // define mid pointer
    let mid = 0;
    // loop while left and right pointers do not overlap
    while (mid <= right) {
        // check if a rule is violated
        // if nums[mid] is 1
        if (nums[mid] === 1) {
            // increment mid pointer
            mid++;
        } else if (nums[mid] === 0) {
        // if nums[mid] is 0
            // swap left with mid
            let temp = nums[left];
            nums[left] = nums[mid];
            nums[mid] = temp;
            // increment left
            left++;
            // increment mid
            mid++;
        } else {
        // if nums[mid] is 2
            // swap: mid with right
            let temp = nums[mid];
            nums[mid] = nums[right];
            nums[right] = temp;
            // decrement right (we know nums[right] will be a 2)
            right--;
        }
    }
};