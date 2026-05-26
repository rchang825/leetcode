/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // brute force: n^3
    const N = nums.length;
    let numi = Number.MAX_VALUE;
    let numj = Number.MAX_VALUE;
    for (let curr of nums) {
        if (curr <= numi) {
            numi = curr;
        } else if (curr <= numj) {
            numj = curr;
        } else {
            return true;
        }
    }
    return false;
};