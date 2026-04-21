
var RandomizedSet = function() {
    this.items = [];
    this.set = new Map();
    this.index = 0;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) {
        // console.log('index of existing val', val, this.set[val]);
        return false;
    } 
    this.set.set(val,this.index);
    this.items[this.index] = val;
    this.index++;
    // console.log('index of new val', val, this.set[val]);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.set.has(val)) {
        let i = this.set.get(val);
        this.index--;
        // console.log('removing from index', i);
        // console.log('need to swap with last added val', this.items[this.index], 'at index', this.index);
        this.items[i] = this.items[this.index];
        this.set.set(this.items[i], i);
        // console.log('index of last added val is now', this.set[this.items[i]]);
        this.items.pop();
        this.set.delete(val);
        return true;
    } 
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let num = Math.floor(Math.random() * this.index);
    return this.items[num];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */