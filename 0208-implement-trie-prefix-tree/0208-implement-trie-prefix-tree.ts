interface TrieNode {
  isWord: boolean;
  next: object; // or array of size 26 for only English lowercase letters
}
class Trie {
    private trie: object;
    constructor() {
        this.trie = {};
    }

    insert(word: string): void {
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
        curr.isWord = true;
    }

    search(word: string): boolean {
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
        return curr.isWord === true;
    }

    startsWith(prefix: string): boolean {
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