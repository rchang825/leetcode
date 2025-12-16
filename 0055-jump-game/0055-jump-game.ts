function canJump(nums: number[]): boolean {
    // dp of jumpable
    const dp: boolean[] = new Array(nums.length).fill(false);
    // dp[end] = true
    dp[nums.length - 1] = true;
    let i: number = nums.length - 2;
    // start at end and decrement by 1
    while (i >= 0) {
        let steps: number = nums[i];
        // if any of the nums[curr] jumps reaches a dp[i] that's true
        let j: number = i;
        while(j - i <= nums[i]) {
            if (dp[j]) {
                // dp[curr] also true
                dp[i] = true;
                break;
            }
            j++;
        }
        i--;
    }
    // return dp[0]
    return dp[0];
};