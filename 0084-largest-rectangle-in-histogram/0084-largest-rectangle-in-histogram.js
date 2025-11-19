/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = [-1];
    let area = 0;
    for (var i = 0; i < heights.length; i++) {
        while (stack[stack.length - 1] !== -1 && heights[stack[stack.length - 1]] >= heights[i]) {
            let h = heights[stack.pop()];
            let w = i - stack[stack.length - 1] - 1;
            area = Math.max(area, h * w);
        }
        stack.push(i);
    }
    while (stack[stack.length - 1] !== -1) {
        let h = heights[stack.pop()];
        let w = heights.length - stack[stack.length - 1] - 1;
        area = Math.max(area, h * w);
    }
    
    return area;
};