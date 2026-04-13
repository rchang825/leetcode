/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    /*
    min is at least 1, max is intervals.length
    sort by start time, end time
    [[1,10] [1,2] [1,2] [3,4] [3,4]]
    [1,2][1,2][1,10][3,4][3,4]
    first meeting room: [1,2], end times [2]
    [1,2] overlaps with earliest end time
    add meeting room, end times [2, 2]
    [1,10] overlaps with earliest end time
    add meeting room, earliest end time [2, 2, 10]
    [3,4] does not overlap with earliest end time, remove earliest end time
    use existing room: end times [2, 10, 4]
    [3,4] does not overlap with earliest end time, remove earliest end time
    use existing room: end times [10, 4, 4]
    done, three meeting rooms
    */
    var ascStartAscEnd = function(a, b) {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } 
        return a[1] - b[1];
    }
    const sorted = intervals.sort(ascStartAscEnd);
    let endTimes = [];
    let numRooms = 1;
    endTimes.push(0);
    for (let meeting of sorted) {
        // console.log('curr', meeting);
        if (endTimes[0] > meeting[0]) {
            // console.log('need a new room!')
            numRooms++;
        } else {
            // console.log('can use this room!')
            endTimes.shift();
        }
        endTimes.push(meeting[1]);
        endTimes = endTimes.sort((a,b) => a - b);
        // console.log(endTimes);
    }
    return numRooms;
};