/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    // frequency map of tasks
    // keep track of the task with highest frequency
    let counts = {};
    let highestFreq = 0;
    let numOfFreq = 0;
    tasks.forEach((t) => {
        if (counts.hasOwnProperty(t)) {
            counts[t]++;
        } else {
            counts[t] = 1;
        }
        if (highestFreq === counts[t]) {
            numOfFreq++;
        } 
        if (highestFreq < counts[t]) {
            highestFreq = counts[t];
            numOfFreq = 1;
        }
        // console.log('highestFreq', highestFreq, 'numOfFreq', numOfFreq);
    });
    let numCycles = highestFreq - 1;
    let cycleSize = n + 1 - numOfFreq;
    let emptySlots = numCycles * cycleSize;
    let numAvail = tasks.length - (highestFreq * numOfFreq);
    let numIdles = Math.max(0, emptySlots - numAvail);
    // console.log(numIdles);
    return tasks.length + numIdles;
};