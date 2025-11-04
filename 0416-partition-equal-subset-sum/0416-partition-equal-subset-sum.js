/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = nums.reduce((accumulator, curr) => accumulator + curr);
    if (sum % 2 === 1) {
        return false;
    }
    sum /= 2;
    // console.log(sum);
    let sums = new Array(sum + 1).fill(false);
    sums[0] = true;
    for (var i = 0; i < nums.length; i++) {
        for (var j = sums.length - 1; j >= 0; j--) {
            // console.log('j', j, sums[j]);
            if (sums[j] && j + nums[i] <= sum) {
                sums[j + nums[i]] = true;
            }
        }
    }
    return sums[sum];
};