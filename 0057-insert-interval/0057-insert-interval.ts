function insert(intervals: number[][], newInterval: number[]): number[][] {
    // [[1,3],[6,9]]
    // newInterval: [2,5]
    // 2 !< 1
    // 2 < 3 and 2 > 1 
    // define res intervals array
    const res: number[][] = [];
    // iterate through existing intervals
    let i: number = 0;
    // if no overlap with newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        // add interval to res
        res.push(intervals[i]);
        i++;
    }
    // while newInterval overlaps
    // curr start <= newInt end
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        // newInt start = min of curr start and newInt start
        // newInt end = max of curr end and newInt end
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        i++;
    }
    // add potentially modified new interval to res
    res.push(newInterval);
    // add rest of intervals
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }
    // return res
    return res;
};