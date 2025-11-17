/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    wordList = new Set(wordList);
    if (!wordList.has(endWord)) {
        return 0;
    }
    let beginSet = new Set([beginWord]);
    let endSet = new Set([endWord]);
    let visited = new Set();
    let length = 1;
    let aCharCode = 'a'.charCodeAt(0);

    while (beginSet.size && endSet.size) {
        if (beginSet.size > endSet.size) {
            let temp = beginSet;
            beginSet = endSet;
            endSet = temp;
        }
        let next = new Set();
        for (let word of beginSet) {
            for (let i = 0; i < word.length; i++) {
                for (let c = 0; c < 26; c++) {
                    if (c + aCharCode !== word.charCodeAt(i)) {
                        let newWord = word.slice(0, i) + String.fromCharCode(c + aCharCode) + word.slice(i + 1);
                        if (endSet.has(newWord)) {
                            return length + 1;
                        }
                        if (wordList.has(newWord)) {
                            if (!visited.has(newWord)) {
                                visited.add(newWord);
                                next.add(newWord);
                            }
                        }
                    }
                }
            }
        }
        beginSet = next;
        length++;
    }
    return 0;
};