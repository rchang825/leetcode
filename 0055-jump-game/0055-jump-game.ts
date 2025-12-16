function canJump(nums: number[]): boolean {
    // define a variable that is able to jump to end
    let first = nums.length - 1;
    
    for (let i: number = nums.length - 1; i >= 0; i--) {
        // if can jump
        if (first <= i + nums[i]) {
            // update first
            first = i;
        }
    }
    // return true if leftmost variable is 0 (if 0 can jump to end)
    return first === 0;;
};