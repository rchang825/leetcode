/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // keep track of maxArea
    let maxArea = 0;
    // area = min(left, right) * size
    let left = 0;
    let right = height.length - 1
    // sliding window
    while (left < right) {
        // calculate area and compare against maxArea
        let area = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(area, maxArea);
        // close window from shorter end
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
};