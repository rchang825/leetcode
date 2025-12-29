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

    // define constant of n = nums.length
    const n = nums.length;
    // define a left and right pointer
    // left pointer = 0
    let left = 0;
    // find rightmost non-2 element
    // right pointer = n - 1

    let right = n - 1;
    // iterate through nums while left and right don't overlap
    while (left < right) {
        // if current number at left = 2, 
        if (nums[left] === 2) {
            // swap element with element at right pointer
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            // decrement right pointer
            // right--;
        }
        // increment left pointer if swap did something right -> nums[left] !== 2
        if (nums[left] !== 2) {
            left++;
        } else {
            // otherwise, decrement right pointer
            right--;
        }
    }
    // console.log('nums after moving 2 to right', nums);
    // reset left pointer to 0
    left = 0;
    // reset right pointer to 0
    right = 0;
    // iterate through nums while right pointer is within bounds of nums
    while (right < n) {
        // if current number at right = 0
        if (nums[right] === 0) {
            // swap element with element at left pointer
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            // increment left pointer
            left++;
        }
        // increment right pointer
        right++;
    }
    // done, 0's are on left and 2's are on right
    // don't return anything, array should be sorted

    /*
    [2, 1, 2, 0, 1, 0]
    length of 6, last index = 5
    we know relative positions: all 2's will be to the "right"
    all 0's will be to the "left"
    leave all the 1's in the "middle"

    one pass: for loop with index or while loop with left and right
    first get all 2's over to right
    track index to swap with (starting at last index)
    found 2 at index 0, swap with index 5, decrement swapping index
    found 2 at index 2, swap with index 4
    [0, 1, 1, 0, 2, 2]

    second pass:
    get all 0's to left
    track index to swap with (starting at 0)
    found 0 at index 0, swap with index 0, increment swapping index
    found 0 at index 3, swap with index 1
    [0, 0, 1, 1, 2, 2]
    */
};