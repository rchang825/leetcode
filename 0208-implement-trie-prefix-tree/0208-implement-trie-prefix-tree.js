var zeroIndexChar = function(ch) {
    return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}

var TrieNode = function() {
    this.children = new Array(26);
    this.isWord = false;
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
  // iterate through all characters of word
    for (let ch of word) {
    // if the character isn't defined yet, define it
        let i = zeroIndexChar(ch);
        if (curr.children[i] === undefined) {
            curr.children[i] = new TrieNode();
        }
        curr = curr.children[i];
    }
  // mark last character as endpoint of a word
  curr.isWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
  // iterate through all characters of word
    for (let ch of word) {
    // if the character isn't defined yet, return false immediately
        let i = zeroIndexChar(ch);
        if (curr.children[i] === undefined) {
            return false;
        }
        curr = curr.children[i];
    }
  // return isWord (prefix does not count)
  return curr.isWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
  // iterate through all characters of prefix
    for (let ch of prefix) {
    // if the character isn't defined yet, return false immediately
        let i = zeroIndexChar(ch);
        if (curr.children[i] === undefined) {
            return false;
        }
        curr = curr.children[i];
    }
  // return true regardless of whether isWord is true
  return true;   
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */