
var MedianFinder = function() {
    this.items = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // console.log('adding', num, 'to', this.items);
    // keep sorted items array to easily find median
    if (this.items.length === 0) {
        this.items.push(num);
        return;
    }
    let left = 0;
    let right = this.items.length;
    let mid = Math.floor(this.items.length / 2);
    while (left < right) {
        // console.log('checking', this.items[mid], 'against', num);
        mid = Math.floor((left + right) / 2);
        if (num > this.items[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    // if (num < this.items[mid]) {
    //     this.items.unshift(num);
    // } else {
        this.items.splice(left, 0, num);
    // }
    // console.log('should insert at', mid);
    // console.log(this.items);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.items.length % 2 === 0) {
        let rightMid = Math.floor(this.items.length / 2);
        return ((this.items[rightMid] + this.items[rightMid - 1]) / 2);
    }
    return this.items[Math.floor(this.items.length / 2)];
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */