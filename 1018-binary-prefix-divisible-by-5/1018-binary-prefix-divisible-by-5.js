/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    // keep track of current number in decimal
    let curr = 0;
    // res array
    let res = [];
    // iterate through nums left to right
    for (var i = 0; i < nums.length; i++) {
        // update dec number by multiplying by 2 
        // add 1 if bit is true (decimal of 0001 is 1)
        curr *= 2;
        if (nums[i]) {
            curr++;
        } 
        // guard against overflow
        curr %= 5;
        // update res array with whether it's divisible by 5
        res[i] = curr % 5 === 0;
    }
    // return res array
    return res;
};