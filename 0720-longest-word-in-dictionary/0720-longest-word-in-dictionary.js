/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    /* sort by ascending word length
    ["a","banana","app","appl","ap","apply","apple"]
    a, ap, app, appl, apple, apply, banana
    prefix trie?

    sort by descending word length
    banana, apple, apply, appl, app, ap, a
    check if b, ba, ban,... exists -> no
    check if a, ap, app, appl exists -> yes
    */ 
    words = words.sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        }
        if (a.length > b.length) {
            return -1;
        }
        return a < b ? -1 : 1;
    });
    // console.log(words);
    const wordSet = new Set(words);
    let curr = '';
    for (let i = 0; i < words.length; i++) {
        // console.log('current word:', words[i]);
        let currSet = new Set();
        for (j = 1; j < words[i].length; j++) {
            // generate prefixes needed
            currSet.add(words[i].substring(0, j));
            // console.log(currSet);
            if (!currSet.isSubsetOf(wordSet)) {
                currSet.delete(words[i].substring(0, j));
                break;
            }
        }
        if (currSet.size === words[i].length - 1) {
            return words[i];
        }
    }
    return '';
};