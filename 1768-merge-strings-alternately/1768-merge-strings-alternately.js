/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // merged array
    let merged = [];
    // one pointer that will add from word1, then word2
    let i = 0;
    // iterate while characters exist in both words
    while (i < word1.length && i < word2.length) {
        merged.push(word1[i]);
        merged.push(word2[i]);
        i++;
    }
    // find longer word and iterate through just that word
    if (word1.length > word2.length) {
        while (i < word1.length) {
            merged.push(word1[i]);
            i++;
        }
    } else if (word2.length > word1.length) {
        while (i < word2.length) {
            merged.push(word2[i]);
            i++;
        }
    }
    // return merged as a string
    return merged.join('');
};