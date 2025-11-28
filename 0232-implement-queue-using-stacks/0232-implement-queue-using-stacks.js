
var MyQueue = function() {
    // initialize the stack(s) data structure
    this.read = [];
    this.write = [];
};
MyQueue.prototype.makeRead = function() {
    // pop everything from write to read
    while (this.write.length !== 0) {
        this.read.push(this.write.pop());
    }
}
MyQueue.prototype.makeWrite = function() {
    // pop everything from read to write
    while (this.read.length !== 0) {
        this.write.push(this.read.pop());
    }
}
/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    // call helper to make write
    this.makeWrite();
    // add to end of write stack
    this.write.push(x);
    // call helper to make read
    this.makeRead();
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    // dequeue from read
    return this.read.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // peek from read
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