function repeatedNTimes(nums: number[]): number {
    // frequency map
    const counts = {};
    // calculate n
    const n = nums.length / 2;
    // iterate through nums
    for (let num of nums) {
        // increment frequency of element
        counts.hasOwnProperty(num) ? counts[num]++ : counts[num] = 1;
        // if frequency of element = n
        if (counts[num] === n) {
            // return element
            return num;
        }
    }
    return -1;
};