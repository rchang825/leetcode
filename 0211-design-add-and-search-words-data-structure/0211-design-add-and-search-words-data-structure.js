// 97 - 122
var TrieNode = function(word, children) {
    this.word = word === undefined ? false : word;
    this.children = children === undefined ? {} : children;
}

var WordDictionary = function() {
    // all lowercase english letters (size 26)
    this.trie = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    // iterate through all characters in word
    let curr = this.trie;
    for (var i = 0; i < word.length; i++) {
        if (!curr.children.hasOwnProperty(word[i])) {
            curr.children[word[i]] = new TrieNode();
        }
        curr = curr.children[word[i]];
    }
    // mark word as existing (true)
    curr.word = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.searchHelper = function(word, node) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === '.') {
        // character can be anything, check all children
            for (let child of Object.values(node.children)) {
                if (this.searchHelper(word.substring(i + 1), child)) {
                    return true;
                }
            }
            // even with any character subbed in, no word, return false 
            return false;
        } else if (node.children.hasOwnProperty(word[i])) {
            node = node.children[word[i]];
        } else {
            // if at end of path, return false 
            return false;
        }
    }
    return node.word;
};

WordDictionary.prototype.search = function(word) {
    return this.searchHelper(word, this.trie);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */