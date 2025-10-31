
var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.map.hasOwnProperty(key)) {
        this.map[key] = new Array();
    }
    this.map[key].push([timestamp, value]);
    // console.log(this.map);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (this.map.hasOwnProperty(key)) {
        // binary search to find closest value to timestamp
        let curr = this.map[key];
        let left = 0;
        let right = curr.length - 1;
        while (left < right) {
            let mid = Math.floor((right - left) / 2) + left;
            // console.log('mid', curr[mid][0]);
            if (timestamp < curr[mid][0]) {
                right = mid - 1;
            } else if (timestamp > curr[mid][0]) {
                left = mid + 1;
            } else {
                return curr[mid][1];
            }
        }
        
        // return curr[right][1];
        if (curr[right]) {
            if (curr[right][0] <= timestamp) {
                return curr[right][1];
            }
            if (right > 0) {
                return curr[right - 1][1];
            }
        }
        return "";
    }
    return "";
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */