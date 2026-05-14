/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var binarySearch = function(nums, target, l, r) {
    let midIndex = Math.floor((l + r - 1) / 2);

    let midpoint = nums[midIndex];
    if (target === midpoint || target === nums[l] || target === nums[r - 1]) {
        return true;
    }
    if (target < midpoint && target >= nums[l]) {
        return binarySearch(nums, target, l, midIndex);
    } else if (target > midpoint && target <= nums[r - 1]){
        return binarySearch(nums, target, midIndex + 1, r);
    } else {
        return false;
    }
};

var findRow = function(matrix, target, l, r) {
    if (l === r) {
        return -1;
    }
    let row = Math.floor((l + r - 1) / 2);
    let leftRange = matrix[row][0];
    let rightRange = matrix[row][matrix[row].length - 1];
    if (leftRange <= target && rightRange >= target) {
        return row;
    }
    if (target < leftRange) {
        return findRow(matrix, target, l, row);
    } else {
        return findRow(matrix, target, row + 1, r);
    }
};

var searchMatrix = function(matrix, target) {
    let r = findRow(matrix, target, 0, matrix.length);
    if (r === -1) {
        return false;
    }
    return binarySearch(matrix[r], target, 0, matrix[r].length);
};