// use two stacks that swap their elements
// push: 
    // pop and push all elements in stack1 to stack 2 (starts empty)
    // push element to stack2 
    // pop and push all elements from stack2 back to stack1
// pop: pop from stack1
var MyQueue = function() {
    this.active = [];
    this.helper = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    while (this.active.length !== 0) {
        this.helper.push(this.active.pop());
    }
    this.helper.push(x);
    while (this.helper.length !== 0) {
        this.active.push(this.helper.pop());
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.active.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.active[this.active.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.active.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */