/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let products = new Array(nums.length);
    // calculate product in front and behind
    // two loops
    /*
        given [1, 2, 3, 4]
        [1, 1, 2, 6] // first pass forwards
        [24, 12, 4, 1] 
        [24, 12, 8, 6] // second pass backwards currProduct * first pass product
    */  
    let product = 1;
    for (var i = 0; i < nums.length; i++) {
        products[i] = product;
        product *= nums[i];
    } 
    product = 1;
    for (var i = nums.length - 1; i >= 0; i--) {
        products[i] = products[i] * product;
        product *= nums[i];
    }
    return products;
};