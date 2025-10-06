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
    // console.log(letters);
    // iterate through ransomNote
    let letterIndex = 0;
    while (letterIndex < ransomNote.length) {
        let l = ransomNote.charAt(letterIndex);
        // decrement count
        if (letters.hasOwnProperty(l) && (letters[l] > 0)) {
            letters[l] = letters[l] - 1;
            letterIndex++;
        } else {
            // return false if letter not in map
            return false;
        }
    }
    // return true
    return true;
};