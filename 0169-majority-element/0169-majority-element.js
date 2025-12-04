/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // define target of more than n / 2
    let target = Math.floor(nums.length / 2) + 1;
    let count = {};
    let i = 0;
    // frequency map
    while (i < nums.length) {
        if (count.hasOwnProperty(nums[i])) {
            count[nums[i]]++;
        } else {
            count[nums[i]] = 1;
        }
        console.log(count);
        // if anything reaches target
        if (count[nums[i]] === target) {
            // immediately return it
            return nums[i];
        }
        i++;
    }
    // assuming majority element always exists
    // code will never reach here
    // but you can return -1 for debugging
    return -1;
};