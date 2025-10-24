
var TrieNode = function(val, children) {
    this.val = val === undefined ? false : val;
    this.children = children === undefined ? {} : children;
};

var Trie = function() {
    this.root = new TrieNode();
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (var i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        if (!curr.children[ch]) {
            curr.children[ch] = new TrieNode();
        }
        curr = curr.children[ch];
    }
    curr.val = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for (var i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
    }
    return curr.val;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (var i = 0; i < prefix.length; i++) {
        let ch = prefix.charAt(i);
        if (!curr.children[ch]) {
            return false;
        }
        curr = curr.children[ch];
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