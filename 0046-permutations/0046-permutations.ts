function permute(nums: number[]): number[][] {
    // define length of nums
    let n: number = nums.length;
    // define res
    let res: number[][] = [];
    
    // helper(curr)
    function helper(curr: number[]): void {
        // if length of curr = length of nums
        if (curr.length === n) {
            // permutation found
            // add to res
            res.push(curr.slice());
        } else {
        // otherwise
            // for all numbers in nums
            nums.forEach((n: number): void => {
                // if not already in curr
                if (!curr.includes(n)) {
                    // add to curr
                    curr.push(n);
                    // call helper(curr)
                    helper(curr);
                    // remove from curr
                    curr.pop();
                }
            });
        }
    }
        
    // call helper with empty array
    helper([]);
    // return res
    return res;
};