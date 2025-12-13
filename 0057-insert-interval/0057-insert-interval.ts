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
        res.push(intervals[i].slice());
        i++;
    }
    // while newInterval overlaps
    // curr start <= newInt end and curr end >= newInt start
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        // newInt end = max of curr end and newInt end
        console.log('comparing', newInterval, 'with', intervals[i]);
        newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
        newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        console.log(newInterval);
        i++;
    }
    // add potentially modified new interval to res
    res.push(newInterval.slice());
    // add rest of intervals
    while (i < intervals.length) {
        res.push(intervals[i].slice());
        i++;
    }
    // return res
    return res;
};