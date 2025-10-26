var StackNode = function(val) {
    this.val = val === undefined ? null : val;
    this.prev = null;
    this.min = Infinity;
}
var MinStack = function() {
    this.last = new StackNode();
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let curr = new StackNode(val);
    if (this.last.min > curr.val) {
        curr.min = val;
    } else {
        curr.min = this.last.min;
    }
    curr.prev = this.last;
    this.last = curr;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.last = this.last.prev;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.last.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.last.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */