/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort nums
    var ascSort = function(a, b) {
        return a - b;
    }
    nums.sort(ascSort);
    // console.log(nums);
    // declare returning array
    let res = [];
    // fix i with an outer loop
    for (var i = 0; i < nums.length; i++) {
        // to prevent duplicates, skip nums that are same as prev
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] > 0) {
            continue;
        }
        // inner loop to set j as i + 1, k as last element
        let j = i + 1;
        let k = nums.length - 1;
        // let total = nums[i] + nums[j] + nums[k];
        while (j < k) {
            // console.log('checking', nums[i], nums[j], nums[k]);
            let total = nums[i] + nums[j] + nums[k];
            // sliding window
            // if total > 0, k--
            if (total > 0) {
                k--;
            } else if (total < 0) {
                // if total < 0, j++
                j++;
            } else {
            // otherwise, triplet found, add to res
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                while (nums[j] === nums[j - 1] && j < nums.length) {
                    j++;
                }
            }
        }
    }
    // return res
    return res;
};