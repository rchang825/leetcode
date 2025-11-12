/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /*
    I: array of integers, target integer
    O: array of two indices [i, j] where nums[i] + nums[j] = target
    C: you may not use same element twice
    E: element appears twice -> return 2 different indices
    */
    // make a frequency map of nums that tracks indices
    let counts = {};
    for (var n = 0; n < nums.length; n++) {
        let complement = target - nums[n];
        if (counts.hasOwnProperty(complement)) {
            return [n, counts[complement][0]];
        }
        if (counts.hasOwnProperty(nums[n])) {
            counts[nums[n]].push(n);
        } else {
            counts[nums[n]] = [n];
        }
    }
    return [];
    // console.log(counts);
    // iterate through nums
    // for (var i = 0; i < nums.length; i++) {
    //     // fix the current number and look for a complement
    //     let complement = target - nums[i];
    //     if (counts.hasOwnProperty(complement)) {
    //         // check for edge case where addends are the same
    //         if (complement === nums[i]) {
    //             if (counts[complement].length >= 2) {
    //                return [counts[complement][0], counts[complement][1]]; 
    //             }
    //         } else {
    //             return [i, counts[complement][0]];
    //         }
    //     }
    // }
    // // given there is guaranteed to be a valid answer, this should never execute
    // return [];
};