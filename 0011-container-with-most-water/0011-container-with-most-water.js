/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let res = 0;
    while (left < right) {
        // min of two extremes * delta left and right
        let curr = Math.min(height[left], height[right]) * (right - left);
        res = Math.max(curr, res);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return res;
};