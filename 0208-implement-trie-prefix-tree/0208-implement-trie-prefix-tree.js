var TrieNode = function(word, children) {
    this.word = word ===undefined ? false : word;
    this.children = children === undefined ? {} : children;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (var i = 0; i < word.length; i++) {
        if (!curr.children.hasOwnProperty(word.charAt(i))) {
            curr.children[word.charAt(i)] = new TrieNode();
        }
        curr = curr.children[word.charAt(i)];
    }
    curr.word = true; // make a word here
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for (var i = 0; i < word.length; i++) {
        if (curr.children[word.charAt(i)]) {
            curr = curr.children[word.charAt(i)];
        } else {
            return false;
        }
    }
    // final check: is this a word?
    return curr.word;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (var i = 0; i < prefix.length; i++) {
        if (curr.children[prefix.charAt(i)]) {
            curr = curr.children[prefix.charAt(i)];
        } else {
            return false;
        }
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */