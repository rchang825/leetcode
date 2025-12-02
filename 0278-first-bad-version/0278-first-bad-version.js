/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // minimize calls = binary search
        // define left and right based on n
        let left = 0;
        let right = n;
        // while left < right
        while (left < right) {
            // calculate middle index using left and right
            // console.log('left', left, 'right', right);
            let mid = Math.floor((right - left)/2) + left;
            // console.log('mid', mid);
            let isBadMid = isBadVersion(mid);
            // if middle is bad, 
            if (isBadMid) {
                // check if left is good
                if (mid === 0 || !isBadVersion(mid - 1)) {
                    // return middle
                    return mid;
                } 
                // otherwise, right = middle - 1
                right = mid - 1;
            } else {
            // if middle is good
                // check if right is bad
                if (isBadVersion(mid + 1)) {
                    // return right
                    return mid + 1;
                }
                // otherwise, left = middle + 1
                left = mid + 1;
            }
        }
        // bad definitely exists in n
        // this case should never happen
        return -1;
    };
};