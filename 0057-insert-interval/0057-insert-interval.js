/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let updated = [];
    // three cases
    // case 1: no conflict and not at correct "place" to insert interval yet
    let i = 0;
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        updated.push(intervals[i]);
        i++;
    }
    // console.log('added all unchanged intervals', updated);
    // case 2: insert interval and resolve merge conflicts
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    updated.push(newInterval);
    // console.log('added in new interval, merging when necessary', updated);
    // case 3: insert the rest of existing intervals without conflict
    while (i < intervals.length) {
        updated.push(intervals[i]);
        i++;
    }
    // console.log('added in rest of intervals if applciable', updated);
    // return updated intervals array
    return updated;
};