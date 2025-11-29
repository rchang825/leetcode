/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    return nums.reduce((sum, num) => sum + num, 0) % k;
};

var minOperationsInitial = function(nums, k) {
    // initialize sum as 0
    let sum = 0;
    // iterate thrugh current nums to find sum
    nums.forEach((n) => {
        sum += n;
    });
    // each operation will decrement sum by 1
    // so the min number of operations = sum % k
    return sum % k;
};