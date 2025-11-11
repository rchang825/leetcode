/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.oldest = {};
    this.latest = {};
    this.oldest.next = this.latest;
    this.latest.prev = this.oldest;
    this.cache = {};
    this.size = 0;
};
LRUCache.prototype.removeFromHead = function() {
    // console.log('removing [', this.oldest.next.key, ',', this.oldest.next.value, ']');
    let node = this.oldest.next;
    delete this.cache[node.key];
    this.oldest.next = node.next;
    this.oldest.next.prev = this.oldest;
    node.next = null;
    node.prev = null;
    this.size--;
};

LRUCache.prototype.addToTail = function(node) {
    // console.log('adding', node);
    this.latest.prev.next = node;
    node.prev = this.latest.prev;
    node.next = this.latest;
    this.latest.prev = node;
    this.size++;
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // return -1 if not found
    if (!this.cache.hasOwnProperty(key)) {
        return -1;
    }
    // otherwise, find, remove, and add to lru
    let node = this.cache[key];
    node.next.prev = node.prev;
    node.prev.next = node.next;
    this.size--;
    this.addToTail(node);

    // return value
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // update value and lru if key already exists
    if (this.cache.hasOwnProperty(key)) {
        let node = this.cache[key];
        node.value = value;
        // delete node
        node.prev.next = node.next;
        node.next.prev = node.prev;
        this.size--;
        // add back to end to maintain lru ordering
        this.addToTail(node);
        return;
    }
    // evict if capacity reached
    if (this.size === this.capacity) {
        this.removeFromHead();
    }
    // add new key-value pair
    let node = { 
        key: key, 
        value: value 
        };
    this.cache[key] = node;
    this.addToTail(node);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */