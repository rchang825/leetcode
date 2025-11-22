/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    var helper = function(r, c, currColor) {
        // check for in bounds
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) {
            return;
        }
        // if same color, change and recurse on adjacent
        if (image[r][c] === currColor) {
            image[r][c] = color;
            helper(r - 1, c, currColor);
            helper(r + 1, c, currColor);
            helper(r, c - 1, currColor);
            helper(r, c + 1, currColor);
        } 
    }
    if (image[sr][sc] !== color) {
        helper(sr, sc, image[sr][sc]);
    }
    
    return image;
};