function minBitwiseArray(nums: number[]): number[] {
    const ans: number[] = new Array(nums.length);
    for (let i: number = 0; i < nums.length; i++) {
        for (let j: number = 1; j < nums[i]; j++) {
            if ((j | (j + 1)) == nums[i]) {
                ans[i] = j;
                break;
            }
        }
        if (!ans[i]) {
            ans[i] = -1;
        }
    }
    return ans;
};