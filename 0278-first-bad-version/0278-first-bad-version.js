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
     // 1 2 3 4 5
     // 3: good
     // 4: bad && 4 - 1: good therefore return 4
     // 
    return function(n) {
        var search = function(start, end) {
            if (start === end) {
                return -1;
            }
            // binary search: find middle
            let mid = Math.floor((end - start) / 2) + start;
            let isBad = isBadVersion(mid);
            console.log('start', start, 'end', end);
            console.log('isBadVersion at', mid, ':', isBad);
            // if bad, go left
            if (isBad) {
                if ( mid === start) {
                    return mid;
                }
                return search(start, mid);
            }
            // if good, go right
            if (!isBad) {
                if (mid < end && isBadVersion(mid+1)) {
                    return mid+1;
                }
                return search(mid, end);
            }
            return -1;
        };
        if (n === 1) {
            if (isBadVersion(n)) {
                return n;
            }
            return -1;
        }
        return search(1, n);
    };
};