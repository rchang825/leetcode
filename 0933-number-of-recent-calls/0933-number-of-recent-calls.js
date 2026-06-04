
var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    // loop while t - requests[i] <= 3000 and requests is not empty
    let delta = t - 3000;
    let i = this.requests.length - 1;
    let res = 0;
    while (i >= 0 && this.requests[i] >= delta ) {
        // console.log(this.requests[i], 'is within range for', t);
        res++;
        i--;
    }
    return res;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */