/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) {
        return true;
    }
    let max = 0;
    // iterate through flowerbed 
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            continue;
        }
        // "plant" whenever possible, increment max
        if (i === 0) {
            if (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                max++;
            }
        } else if (i === flowerbed.length - 1) {
            if (flowerbed[i - 1] === 0) {
                flowerbed[i] = 1;
                max++;
            }
        } else {
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                max++;
            }
        }
    }
    // console.log(flowerbed);
    // return true if max >= n, false otherwise
    return max >= n;
};