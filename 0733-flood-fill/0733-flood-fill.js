/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    // save image[sr][sc]'s current color as prev
    let prev = image[sr][sc];
    if (prev === color) {
        return image;
    }
    floodFillHelper(image, sr, sc, color, prev);
    return image;
};
var floodFillHelper = function(image, sr, sc, color, ogColor) {
    // return if either index is out of bounds
    // console.log('sr:', sr, 'sc:', sc);
    if ((sr > (image.length - 1)) || (sr < 0) || (sc > (image[sr].length - 1)) || (sc < 0)) {
        // console.log('out of bounds, return');
        return;
    }
    if (image[sr][sc] !== ogColor) {
    // return if curr is not ogColor
        // console.log('not ogColor, return');
        return;
    }
    image[sr][sc] = color;
    // console.log(`painted [${sr},${sc}]: ${image}`);
    // recurse with up, down, left, right, of curr
    floodFillHelper(image, sr - 1, sc, color, ogColor);
    floodFillHelper(image, sr + 1, sc, color, ogColor);
    floodFillHelper(image, sr, sc - 1, color, ogColor);
    floodFillHelper(image, sr, sc + 1, color, ogColor);
    // return image;
};