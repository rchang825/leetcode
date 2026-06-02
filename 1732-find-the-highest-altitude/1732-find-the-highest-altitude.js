/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // iterate through once, rewriting with the current altitude
    // keep track of the maxAlt compared to current altitude
    let maxAlt = 0;
    let curr = 0;
    for (let i = 0; i < gain.length; i++) {
        curr += gain[i];
        maxAlt = Math.max(maxAlt, curr);
    }
    // return maxAlt
    return maxAlt;
};