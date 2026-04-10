/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function(source, target) {
    // all characters in target should occur at least once in source
    // iterate through target (frequency map)
    const charCounts = {};
    for (let c of target) {
        if (!charCounts.hasOwnProperty(c)) {
            charCounts[c] = true;
        }
    }
    // iterate through source and remove from charCounts
    for (let c of source) {
        if (charCounts.hasOwnProperty(c)) {
            delete charCounts[c];
        }
    }
    // if charCounts has any keys, impossible, return -1
    if (Object.keys(charCounts).length !== 0) {
        return -1;
    }
    let count = 1;
    let sp = 0;
    const m = source.length;
    let tp = 0;
    const n = target.length;
    while (tp < n) {
        // best case: letters match
        if (source[sp] === target[tp]) {
            sp++;
            tp++;
        } else {
            // otherwise, see if something else matches as long as same cycle
            while (source[sp] !== target[tp] && sp < m) {
                sp++;   
            }
            if (sp === m) {
                // start new subsequence
                count++;
                sp = 0;
            }
        }
    }
    return count;
};