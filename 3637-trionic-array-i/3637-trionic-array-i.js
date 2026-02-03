/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isTrionic = function(nums) {
    // two pointers starting one apart
    let p = 0;
    const n = nums.length;
    if (n <= 3) {
        return false;
    }
    // while increasing
    while (p < n && nums[p + 1] > nums[p]) {
        // move p forwards
        p++;
    }
    if (p == 0) {
        return false;
    }
    let q = p;
    // while decreasing
    while (q < n && nums[q + 1] < nums[q]) {
        // move q forwards
        q++;
    }
    if (q == p) {
        return false;
    }
    // return true if q to n -1 is increasing
    let i = q;
    while (i < n && nums[i + 1] > nums[i]) {
        i++;
    }
    // console.log(p, q);
    return i == n - 1 && i !== q;
};