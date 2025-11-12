/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    // iterate through height
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left <= right) {
        if (height[right] >= height[left]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                res += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                res += rightMax - height[right];
            }
            right--;
        } 
    }
    // return res
    return res;
};