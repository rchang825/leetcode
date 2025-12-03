/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // build frequency map of letters in ransomNote
    let counts = {};
    for (var i = 0; i < ransomNote.length; i++) {
        if (counts.hasOwnProperty(ransomNote[i])) {
            counts[ransomNote[i]]++;
        } else {
            counts[ransomNote[i]] = 1;
        }
    }
    // iterate through magazine (not with a for loop)
    let l = 0;
    while (l < magazine.length) {
        // if the letter is used in map
        if (counts.hasOwnProperty(magazine[l])) {
            // decrement or delete letter from map
            if (counts[magazine[l]] === 1) {
                delete counts[magazine[l]];
            } else {
                counts[magazine[l]]--;
            }
        }
        // if no more letters in map
        if (Object.keys(counts).length === 0) {
            // return true
            return true;
        }
        l++;
    }
    // return false
    return false;
};