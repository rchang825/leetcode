/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // iterate through once, rewriting with the current altitude
    // keep track of the maxAlt compared to current altitude
    let maxAlt = 0;
    let curr = gain[0];
    for (let i = 1; i < gain.length; i++) {
        maxAlt = Math.max(maxAlt, curr);
        curr += gain[i];
    }
    // return maxAlt
    return Math.max(maxAlt, curr);
};