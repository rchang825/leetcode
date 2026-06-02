/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // 0 1 8 11 17 22 28
    // 0 - 28 (28 - 0 - 0)
    // 0 - 27 (28 - 0 - 1)
    // 1 - 20 (28 - 1 - 7)
    // 8 - 17 (28 - 8 - 3)
    // 11 - 11 (28 - 11 - 6)
    // 17 - 6 (28 - 17 - 5)
    // 22 - 0 (28 - 22 - 6)
    // prefix sum: use additional space to match indices
    // define total as 0
    let total = 0;
    const pref = [];
    // iterate through nums
    for (let n of nums) {
        // push total to pref
        pref.push(total);
        // update total with nums[i]
        total += n;
    }
    // iterate through prefixes (using 0 if out of bounds for nums)
    for (let i = 0; i < pref.length; i++) {
        // left sum = prefix sum at i
        // right sum = total - left sum - curr at i
        // if left sum == right sum
        if (pref[i] === (total - pref[i] - nums[i])) {
            // return i
            return i;
        }
    }
    // return -1
    return -1;
};