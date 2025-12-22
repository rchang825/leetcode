function threeSum(nums: number[]): number[][] {
    // sort nums
    nums.sort((a, b) => a - b);
    // define res
    const res: number[][] = [];
    const n: number = nums.length;
    // fix first
    for (let i: number = 0; i < n; i++) {
        // skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // first num must be negative
        if (nums[i] > 0) {
            continue;
        }
        // sliding window for j and k
        let j: number = i + 1;
        let k: number = n - 1;
        while (j < k) {
            let currSum: number = nums[i] + nums[j] + nums[k];
            if (currSum > 0) {
                // want a smaller max (close right)
                k--;
            } else if (currSum < 0) {
                // want a larger min (close left)
                j++;
            } else {
                // combination found, add to res
                res.push([nums[i], nums[j], nums[k]]);
                // move window over (skip dupes)
                do {
                  j++;  
                } while (nums[j] === nums[j - 1] && j < nums.length) 
            }
        }
    }
    // return res
    return res;
};