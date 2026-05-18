/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums, l = 0, r = nums.length) {
    /*
    left < mid < right -> check right extreme
        if right extreme < mid, consider right half which contains rotation
        if right extreme > mid, right is sorted, consider left half which may or may not be rotated
            if left extreme < mid, left is not rotated, return left extreme
    left > mid < right -> return mid
    left < mid > right -> return right
    */
    let midIndex = Math.floor((l + r) / 2);
    let mid = nums[midIndex];
    if (midIndex === 0) {
        return mid;
    }
    let left = midIndex > 0 ? nums[midIndex - 1] : -5001;
    let right = midIndex < r - 1 ? nums[midIndex + 1] : 5001;
    if (left > mid && mid < right) {
        return mid;
    } else if (left < mid && mid > right) {
        return right;
    } else {
        let extreme = nums[r - 1];
        if (extreme < mid) {
            return findMin(nums, midIndex + 1, r);
        } else {
            extreme = nums[l];
            if (extreme < mid) {
                return extreme;
            } else {
                return findMin(nums, l, midIndex);
            }
        }
    }
};