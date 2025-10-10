/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    // define updated intervals array
    let updated = [];
    // find where newInterval should go by iterating through intervals
    let i = 0;
    // move existing, untouched intervals onto other array
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        // console.log('no conflict with existing interval', intervals[i]);
        updated.push(intervals[i]);
        i++;
    }
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        // console.log('resolving merge conflicts between', intervals[i], 'and', newInterval);
        newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
        i++;
    }
    // console.log('adding interval after resolving conflicts', newInterval);
    updated.push(newInterval);
    while (i < intervals.length) {
        // console.log('no conflicts, adding', intervals[i]);
        updated.push(intervals[i]);
        i++;
    }
    return updated;
};