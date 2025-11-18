/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let two = 0;
    for (var i = 0; i < bits.length; i++) {
        // console.log(bits[i]);
        if(two === 1) {
            // console.log('10 or 11 at', i);
            two = 2;
        } else if (bits[i]) {
            // console.log('starts with 1 at', i);
            two = 1;
        } else {
            two = 0;
        }
    }
    return two === 0;
};