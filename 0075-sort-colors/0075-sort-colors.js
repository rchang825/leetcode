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
    // loop while left and right pointers do not overlap
    while (left < right) {
        // check if a rule is violated
        // if nums[left] is 2 or nums[right] is 0
        if (nums[left] === 2 || nums[right] === 0) {
            // swap
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
        // if nums[left] is not a 2
        if (nums[left] !== 2) {
            // increment left
            left++;
        } else {
            // decrement right to initiate different swap next iteration
            right--;
        }
        // if nums[right] is 2
        if (nums[right] === 2) {
            // decrement right
            right--;
        }
    }
    /*
        [2, 0, 2, 1, 1, 0]
        [0, 0, 2, 1, 1, 2]
               ^     ^ 
        [0, 0, 1, 1, 2, 2]
                  ^  
        swap because 2 should go on right and 0 should go on left
        increment left pointer bc it's not a 2
        decrement right pointer bc it is a 2
        no swap bc no "rules" violated
        increment left
        swap because 2 should go on right
        increment left pointer bc it's not a 2
        decrement right pointer bc it is a 2
        pointers overlap, stop
    */



    while (left < right) {
        if (nums[left] === 2) {
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
        if (nums[left] !== 2) {
            left++;
        } else {
            right--;
        }
    }
    left = 0;
    right = 0;
    while (right < n) {
        if (nums[right] === 0) {
            let temp = nums[right];
            nums[right] = nums[left];
            nums[left] = temp;
            left++;
        }
        right++;
    }
};