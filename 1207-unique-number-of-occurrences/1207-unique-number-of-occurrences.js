/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // could use an array if the occurrences are known/limited
    // frequency map (iterate through once to build)
    const freq = new Map();
    for (let num of arr) {
        if (freq.has(num)) {
            freq.set(num, freq.get(num) + 1);
        } else {
            freq.set(num, 1);
        }
    }
    // build a set from iterating through freq
    const set = new Set();
    for (let value of freq.values()) {
        // if any dupes, return false
        if (set.has(value)) {
            return false;
        }
        set.add(value);
    }

    // return true
    return true;
};