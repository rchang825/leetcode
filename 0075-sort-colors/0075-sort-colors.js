/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var swap = function(i, j) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    let blue = nums.length - 1;
    let red = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            // console.log('moving 0 to beginning');
            if (i > red) {
                swap(i, red);
                red++;
                i--;
            }
        } 
        if (nums[i] === 2) {
            // console.log('moving 2 to end');
            if (i < blue) {
                swap(i, blue);
                blue--; // guaranteed to be a 2 now
                i--;
            }

        }
        // console.log(nums);
    }
}
var sortColorsBrute = function(nums) {
    let redCount = 0;
    let whiteCount = 0;
    // let blueCount = 0;
    for (var num of nums) {
        if (num === 0) {
            redCount++;
        }
        if (num === 1) {
            whiteCount++;
        }
        // if (num === 2) {
        //     blueCount++;
        // }
    }
    for (var i = 0; i < nums.length; i++) {
        if (redCount > 0) {
            nums[i] = 0;
            redCount--;
        } else if (whiteCount > 0) {
            nums[i] = 1;
            whiteCount--;
        }
        else {
            nums[i] = 2;
        }
    }
};