/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // prefix product
    let pref = [];
    let prod = 1;
    for (let i = 0; i < nums.length; i++) {
        pref.push(prod);
        prod *= nums[i];
    }
    // suffix product
    let suff = new Array(nums.length);
    prod = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        suff[i] = prod;
        prod *= nums[i];
    }
    // multiply pref and suff to get product except self
    for (let i = 0; i < nums.length; i++) {
        nums[i] = pref[i] * suff[i];
    }
    return nums;
};