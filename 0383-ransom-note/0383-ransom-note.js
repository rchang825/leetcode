/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length < ransomNote.length) {
        return false;
    }
    // frequency map by iterating through magazine letters
    let letters = {};
    for (var i = 0; i < magazine.length; i++) {
        if (letters.hasOwnProperty([magazine.charAt(i)])) {
            letters[magazine.charAt(i)] = letters[magazine.charAt(i)] + 1;
        } else {
            letters[magazine.charAt(i)] = 1;
        }
    }
    console.log(letters);
    // iterate through ransomNote
    let letterIndex = 0;
    while (letterIndex < ransomNote.length) {
        // return false if letter not in map
        let l = ransomNote.charAt(letterIndex);
        // decrement count or delete from map if reaches 0
        if (letters.hasOwnProperty(l)) {
            if (letters[l] === 1) {
                delete letters[l];
            } else {
                letters[l] = letters[l] - 1;
            }
            letterIndex++;
        } else {
            return false;
        }
    }
    // return true
    return true;
};