/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // build frequency map of letters in ransomNote
    // can use an array of size 26 because all letters are lowercase
    let counts = new Array(26);
    let aChar = 'a'.charCodeAt(0);
    for (var i = 0; i < ransomNote.length; i++) {
        let code = ransomNote.charCodeAt(i) - aChar;
        if (counts[code]) {
            counts[code]++;
        } else {
            counts[code] = 1;
        }
    }
    // define a length variable that = ransomNote.length
    let length = ransomNote.length;
    // iterate through magazine
    let l = 0;
    while (l < magazine.length) {
        // if ransomNote uses a letter in magazine
        let currCode = magazine.charCodeAt(l) - aChar;
        if (counts[currCode]) {
            // decrement it
            counts[currCode]--;
            // decrement length
            length--;
        }
        // if length is ever 0
        if (length === 0) {
            // return true early
            return true;
        }
        l++;
    }
    // return false otherwise
    return false;
}
var canConstruct1 = function(ransomNote, magazine) {
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