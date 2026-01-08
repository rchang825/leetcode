function merge(intervals: number[][]): number[][] {
    // sort intervals by start
    function sortStartAsc(a: number[], b: number[]) {
        return a[0] - b[0];
    }
    intervals.sort(sortStartAsc);
    // new res array
    const res: number[][] = [];
    // iterate through sorted intervals
    let i = 0;
    while (i < intervals.length) {
        let [currStart, currEnd]: number[] = intervals[i];
        let j = i + 1;
        while (j < intervals.length && intervals[j][0] <= currEnd) {
        // merge condition: while proceeding interval start is <= current end
            // keep first interval start, and max of ends
            currEnd = Math.max(currEnd, intervals[j][1]);
            j++;
        }
        // add in merged or unmerged interval
        res.push([currStart, currEnd]);
        i = j;
    }
    // return res
    return res;
};