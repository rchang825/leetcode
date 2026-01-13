function jump(nums: number[]): number {
    // [2,3,1,1,4]
    //  0 1 2 3 4
    // starting from the end to reach index 4
    /*
    at index 3, take a jump of 1 -> 1
    at index 2, take a jump of 1 + jump(index 3) -> 2
    at index 1, min(take a jump of 3 = 1, jump of 2 + jump(index 3) = 2, jump of 1 + jump(index 2) = 3) -> 1
    at index 0, min(jump 2 + jump(index 2) = 3, jump 1 + jump(index 1) = 2) -> 2
    return jump(index 0) = 2
    */
    const n: number = nums.length;
    const bestFrom: number[] = new Array(n).fill(Infinity);
    
    bestFrom[n - 1] = 0;
    for (let i: number = n - 2; i >= 0; i--) {
        // console.log('at index', i);
        // for all possible indices that are jumpable from index
        for (let j: number = Math.min(n - i - 1, nums[i]); j > 0; j--) {
            // console.log('considering a jump of size', j, 'total num of jumps = 1 + jump(', i + j, ')');
            bestFrom[i] = Math.min(bestFrom[i], 1 + bestFrom[i + j]);
            // console.log('best for ', i, '=', bestFrom[i]);
        }
    }
    return bestFrom[0];
};