/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    // merge intervals of balloons
    /*
    sort asc end
    [[10,16],[2,5],[1,6],[9,12],[2,8]]
    [2,5],[1,6],[2,8],[9,12],[10,16]
    declare arrows as 0
    curr 2,5
    1 <= 5 ? mergeable if start of next <= end of curr
    2 <= 5 ? mergeable
    9 <= 5 ? NOT mergeable, arrows++, curr end is now 12
    10 <= 12 ? mergeable
    end of points, add last arrow (arrows++)
    return arrows
    */
    // sort asc end
    let sortAscEnd = function(a, b) {
        if (a[1] < b[1]) {
            return -1;
        }
        if (a[1] > b[1]) {
            return 1;
        }
        return 0;
    }
    points = points.sort(sortAscEnd);
    // console.log(points);
    // declare arrows
    let arrows = 0;
    // define curr as first point end
    let curr = points[0][1];
    // iterate through all points
    for (let p of points) {
        // if point start <= curr end
            // can use same arrow, do nothing
        // else 
        if (p[0] > curr) {
            // cannot use same arrow, increment arrows
            // curr end = point end
            arrows++;
            curr = p[1];
        }
    }
    // add last arrow
    arrows++;
    // return arrows
    return arrows;
};
var findMinArrowShotsA = function(points) {
    // merge intervals of balloons
    /*
    want larger start, smaller end
    [[10,16],[2,5],[1,6],[9,12],[2,8]]
    [1,6],[2,5],[2,8],[9,12],[10,16]
    curr range 1,6
    2 <= 6 -> can merge
    decide what start of range is: max of 1 and 2
    decide what end of range is: min of 6 and 5
    -> range is now 2,5
    2 <= 5 -> can merge
    decide what start of range is: max of 2 and 2
    decide what end of range is: min of 5 and 8
    -> range is now 2,5
    9 NOT <= 5 -> cannot merge
    add curr range to ranges and start new range
    -> 9,12
    10 <= 12 -> can merge
    decide start of range: max of 10 and 9
    decide end of range: min of 12 and 16
    -> range is now 10,12
    end of options, add last range
    -> ranges: [2,5],[10,12]
    return number of non-overlapping intervals -> 2
    */
    // sort asc start
    let sortAscStart = function(a, b) {
        if (a[0] < b[0]) {
            return -1;
        }
        if (a[0] > b[0]) {
            return 1;
        }
        return 0;
    }
    points = points.sort(sortAscStart);
    // console.log(points);
    // declare ranges
    const ranges = [];
    // define curr as first interval
    let curr = points[0];
    // iterate through all candidates
    for (let p of points) {
        // if start of candidate <= end of curr interval, CAN MERGE
        if (p[0] <= curr[1]) {
            // console.log('CAN MERGE');
            // merge: curr start = max(), curr end = min()
            curr[0] = Math.max(curr[0], p[0]);
            curr[1] = Math.min(curr[1], p[1]);
        } else {
            // console.log('CANNOT MERGE');
        // else, CANNOT MERGE
            // add non-overlapping curr interval to ranges
            ranges.push(curr);
            // curr = candidate
            curr = p;
        }
    }
    // add last interval (curr) to ranges
    ranges.push(curr);
    // console.log(ranges);
    // return length of ranges
    return ranges.length;
};