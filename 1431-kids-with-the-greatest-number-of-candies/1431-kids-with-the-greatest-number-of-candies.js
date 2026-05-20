/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    // get max of candies
    let max = Math.max(...candies);
    // define result array
    const result = new Array(candies.length);
    // iterate through array once
    for (let i = 0; i < candies.length; i++) {
        // if candies[i] + extraCandies >= max
        if (candies[i] + extraCandies >= max) {
            // result[i] = true
            result[i] = true;
        } else {
        // otherwise
            // result[i] = false
            result[i] = false;
        }
    }
    // return result
    return result;
};