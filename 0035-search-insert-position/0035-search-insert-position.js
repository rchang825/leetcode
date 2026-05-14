/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target, l = 0, r = nums.length) {
    // midpoint using l and r starting at 0 and nums.length
    let midIndex = Math.floor((l + r - 1) / 2);
    let midpoint = nums[midIndex];
    // if target = nums[midpoint] 
    if (target === midpoint) {
        // return midpoint index
        return midIndex;
    } else {
        if (midIndex === r - 1) {
            // not found, find whether the proper index is to left or right of midpoint index
            return target < midpoint ? r - 1 : r;
        }
        if (target < midpoint) {
        // if target < nums[midpoint]
            // recurse with r = midpoint index
            return searchInsert(nums, target, l, midIndex);
        } else {
        // else look right
            // recurse with l = midpoint index + 1
            return searchInsert(nums, target, midIndex + 1, r);

        }
    }
};