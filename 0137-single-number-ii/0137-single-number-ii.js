/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res = 0;

    for (let i = 0; i < 32; i++) {
        let bitSum = 0;
        for (let n of nums) {
            let bit = (n >> i) & 1;
            bitSum += bit;
        }
        let leftover = bitSum % 3;
        res = res | (leftover << i);
    }
    return res;
};