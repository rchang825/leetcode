/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // sort intervals
    var sortIntervals = function(a, b) {
        if (a[0] < b[0]) {
            return -1;
        } 
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }
    intervals.sort(sortIntervals);
    // define res
    let res = [];
    let i = 0;
    // iterate through intervals (don't use for loop bc length is not fixed)
    while (i < intervals.length) {
        // set merged to be curr interval
        let merged = intervals[i].slice();
        // while next[0] < curr[1] 
        while (i < intervals.length - 1 && intervals[i + 1][0] <= merged[1]) {
            // merge: merged[1] = next[1]
            merged[1] = Math.max(intervals[i + 1][1], merged[1]);
            // move onto next
            i++;
        }
        // add merged to res
        res.push(merged);
        i++;
    }
    // return res
    return res;
};