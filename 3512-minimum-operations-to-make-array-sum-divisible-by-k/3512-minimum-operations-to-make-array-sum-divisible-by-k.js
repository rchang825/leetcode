/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // initialize sum as 0
    let sum = 0;
    // iterate thrugh current nums to find sum
    nums.forEach((n) => {
        sum += n;
    });
    return sum % k;
};