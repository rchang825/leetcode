/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // add all senators to queue
    // count how many Ds
    // counter of how many Ds are banned
    // ban opposing senator (pop off queue)
    // announce victory (if bannedDNum = dNum)
    /*
    RRDRD -> RRR
    dNum = 2
    R: pop, ban next D, back on queue, dNum = 1
    R: pop, ban next D, back on queue, dNum = 0 -> RADIANT
    D: pop, skipped, bDNum = 1, does not go back
    R: pop, ban next D, back on queue, bDNum = 2
    D: pop, skipped, bDNum = 1, does not go back


    DDRDR
    dNum = 3
    D: pop, ban next R, back on queue, dNum = 4
    D: pop, ban next R, back on queue, dNum = 5 -> DIRE
    */
    let queue = senate.split('');
    let bannedD = 0;
    let bannedR = 0;
    while (queue.length) {
        // if bannedR or bannedD go beyond number of senators, decare victory
        if (bannedR > senate.length) {
            return 'Dire';
        }
        if (bannedD > senate.length) {
            return 'Radiant';
        }
        let curr = queue.shift();
        if (curr === 'R') {
            if (bannedR > 0) {
                bannedR--;
            } else {
                // ban D and go back on queue
                bannedD++;
                queue.push(curr);
            }
        } else {
            if (bannedD > 0) {
                bannedD--;
            } else {
                // ban R and go back on queue
                bannedR++;
                queue.push(curr);
            }
        }
    }
};