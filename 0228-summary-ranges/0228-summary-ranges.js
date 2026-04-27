/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    // declare ranges
    const ranges = [];
    // declare new range from first n of nums
    let left = nums[0];
    let right = nums[0];
    // iterate through nums
    for (let i = 1; i < nums.length; i++) {
        let n = nums[i];
        // if consecutive, increase range from right
        if (n === right + 1) {
            right++;
        } else {
        // if not consecutive, add range to ranges
            if (left !== right) {
                ranges.push(`${left}->${right}`);
            } else {
                ranges.push(`${right}`);
            }
            // start new range
            left = n;
            right = n;
        }
    }
    // push last range
    if (left !== right) {
        ranges.push(`${left}->${right}`);
    } else {
        ranges.push(`${right}`);
    }
    // return ranges
    return ranges;
};