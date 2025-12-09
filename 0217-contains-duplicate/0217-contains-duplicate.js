/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // frequency map
    let count = {};
    // iterate through nums
    for (var i = 0; i < nums.length; i++) {
        // if map already contains num
        if (count.hasOwnProperty(nums[i])) {
            // return true
            return true;
        }
        // add num to map
        count[nums[i]] = 1;
    }
    // return false
    return false;
};