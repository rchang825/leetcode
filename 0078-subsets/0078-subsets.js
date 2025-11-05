/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // declare res
    let res = [];
    // add empty set
    res.push([]);
    // iterate through nums and add a copy of existing subset + each num
    nums.forEach((n) => {
        res.forEach((subset) => {
            let newSubset = subset.slice();
            newSubset.push(n);
            res.push(newSubset);
        })
    });
    // return res
    return res;
};