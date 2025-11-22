/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;
    nums.forEach((num) => {
        // do nothing if already divisible by 3
        // otherwise, either add or sub 1
            // add 1 if num % 3 === 2
            // subtract 1 if num % 3 === 1
        if (num % 3 !== 0) {
            count++;
        }
    });

    return count;
};