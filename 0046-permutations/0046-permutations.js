/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    var createPerm = function(curr) {
        if (curr.length === nums.length) {
            res.push(curr.slice());
        } else {
            for (var i = 0; i < nums.length; i++) {
                if (!curr.includes(nums[i])) {
                    curr.push(nums[i]);
                    createPerm(curr);
                    curr.pop();
                }
            }
        }
    }
    createPerm(new Array());
    return res;
};