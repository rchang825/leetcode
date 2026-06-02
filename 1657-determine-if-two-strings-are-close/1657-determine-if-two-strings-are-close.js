/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    // cannot be close if different lengths
    if (word1.length !== word2.length) {
        return false;
    }
    // cannot be close if character(s) unique to one word
    let map1 = new Map();
    let map2 = new Map();
    // iterate through word1: frequency map CAN ALSO USE ARRAY OF SIZE 26
    for (let i = 0; i < word1.length; i++) {
    /* a: 1, b: 1, c: 1 */
        let ch = word1[i];
        if (map1.has(ch)) {
            map1.set(ch, map1.get(ch) + 1);
        } else {
            map1.set(ch, 1);
        }
    }
    // iterate through word2: frequency map
    
    for (let i = 0; i < word2.length; i++) {
    /*. b: 1, c: 1, a: 1 */
        let ch = word2[i];
        if (map2.has(ch)) {
            map2.set(ch, map2.get(ch) + 1);
        } else {
            map2.set(ch, 1);
        }
    }
    // map sizes should be the same
    if (map1.size !== map2.size) {
        return false;
    }
    // keys of map should be the same, values of map should be the same
    // iterate over keys of map1 and check for entries of map2
    for (let ch of map1.keys()) {
        if (!map2.has(ch)) {
            return false;
        }
    }
    // compare sorted values of map1 to sorted values of map2
    let freq1 = Array.from(map1.values()).sort((a, b) => a - b);
    let freq2 = Array.from(map2.values()).sort((a, b) => a - b);
    for (let i = 0; i < freq1.length; i++) {
        if (freq1[i] !== freq2[i]) {
            return false;
        }
    } 
    return true;
};