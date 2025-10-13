/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    // custom sort function
    // console.log('before', points);
    points.sort(sortByDistance);
    // console.log('after', points);
    // return slice to k
    return points.slice(0, k);
};
var sortByDistance = function(a, b) {
    let distA = a[0]**2 + a[1]**2;
    let distB = b[0]**2 + b[1]**2;
    if (distA < distB) {
        return -1;
    } else if (distB < distA) {
        return 1;
    }
    return 0;
}