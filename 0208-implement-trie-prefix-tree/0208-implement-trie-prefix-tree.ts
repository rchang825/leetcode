interface TrieNode {
  isWord: boolean;
  next: object;
}
class Trie {
    private trie: object;
    constructor() {
        // array or object of lowercase English letters (26) with isWord boolean
        this.trie = {};
    }

    insert(word: string): void {
        // traverse trie to insert word where each parent is the previous letter
        // flip each letter in word to true if not already true
        
        if (!this.trie[word[0]]) {
            this.trie[word[0]] = {
                isWord: word.length === 1 ? true : false,
                next: {}
            };
        }
        let curr: TrieNode = this.trie[word[0]];
        for (let i: number = 1; i < word.length; i++) {
            if (!curr.next[word[i]]) {
                curr.next[word[i]] = {
                    isWord: false,
                    next: {}
                };
            }
            curr = curr.next[word[i]];
        }
        // isWord of final letter = true
        curr.isWord = true;
    }

    search(word: string): boolean {
        // traverse trie letter by letter to find word
        // difference in prefix vs full word - flag?
        let curr: TrieNode = this.trie[word[0]];
        if (!curr) {
            return false;
        }
        for (let i: number = 1; i < word.length; i++) {
            curr = curr.next[word[i]];
            if (!curr) {
                return false;
            }
        }
        // return false immediately if any letter in word does not exist
        return curr.isWord === true;
    }

    startsWith(prefix: string): boolean {
        // traverse trie letter by letter to find prefix and immediately return true
        // return false immediately if any letter in word does not exist
        let curr: TrieNode = this.trie[prefix[0]];
        if (!curr) {
            return false;
        }
        for (let i: number = 1; i < prefix.length; i++) {
            if (!curr) {
                return false;
            }
            curr = curr.next[prefix[i]];
        }
        return !!curr;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */