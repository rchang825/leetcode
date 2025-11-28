
var MyQueue = function() {
    // initialize the stack(s) data structure
    this.read = [];
    this.write = [];
    // peek variable
    this.top;
};
MyQueue.prototype.makeRead = function() {
    // pop everything from write to read
    while (this.write.length !== 0) {
        this.read.push(this.write.pop());
    }
}
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // update peek if stacks are empty
    if (this.write.length === 0) {
        this.top = x;
    }
    // add to end of write stack
    this.write.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // call helper to make read if read is empty
    if (this.read.length === 0) {
       this.makeRead(); 
    }
    // dequeue from read
    return this.read.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // return peek (from write) if read is empty
    if (this.read.length === 0) {
        return this.top;
    }
    // peek from read if it isn't empty
    return this.read[this.read.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    // return true if both stacks are empty
    return this.read.length === 0 && this.write.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */