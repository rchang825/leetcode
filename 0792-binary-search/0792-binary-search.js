/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // given sorted array
    // startIndex = 0
    // endIndex = nums.length - 1
    // call helper function with startIndex and endIndex
    return findIndexSearch(nums, target, 0, nums.length - 1);
};
var findIndexSearch = function(nums, target, startIndex, endIndex) {
    // base case: start and end are <= 1 apart
    // console.log('start', startIndex, 'end', endIndex);
    if (target === nums[startIndex]) {
        return startIndex;
    }
    if (target === nums[endIndex]) {
        return endIndex;
    }
    if (endIndex - startIndex <= 1) {
        // not found, return -1
        return -1;
    }
    // calculate middle
    let midIndex = Math.floor((endIndex - startIndex)/2) + startIndex;
    // console.log('mid', midIndex);
    // if target = val at middle
    if (target === nums[midIndex]) {
        // return middle
        // console.log('target found');
        return midIndex;
    }
    // if target < val at middle
    if (target < nums[midIndex]) {
        // recurse on left section
        // console.log('target < ' + nums[midIndex] + ', going left');
        return findIndexSearch(nums, target, startIndex, midIndex);
    } else {
    // else
        // recurse on right section
        // console.log('target > ' + nums[midIndex] + ', going right');
        return findIndexSearch(nums, target, midIndex, endIndex);
    }
}