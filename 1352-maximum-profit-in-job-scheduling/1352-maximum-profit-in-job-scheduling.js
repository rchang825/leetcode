/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    for (var i = 0; i < startTime.length; i++) {
        jobs.push([startTime[i], endTime[i], profit[i]]);
    }
    jobs.sort((a, b) => a[0] - b[0]);
    for (var i = 0; i < startTime.length; i++) {
        startTime[i] = jobs[i][0];
    }

    var next = function(prev) {
        let left = 0;
        let right = startTime.length - 1;
        nextIndex = startTime.length;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (prev <= startTime[mid]) {
                nextIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return nextIndex;
    }
    let memo = [];
    for (var i = startTime.length - 1; i >= 0; i--) {
        let profit = 0;
        let nextIndex = next(jobs[i][1]);
        if (nextIndex !== startTime.length) {
            profit = jobs[i][2] + memo[nextIndex];
        } else {
            profit = jobs[i][2];
        }
        if (i === startTime.length - 1) {
            memo[i] = profit;
        } else {
            memo[i] = Math.max(profit, memo[i + 1]);
        }
    }
    return memo[0];
};