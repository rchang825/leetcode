/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // sort both arrays
    nums1.sort((a,b) => a - b);
    nums2.sort((a,b) => a - b);
    const answer = [[],[]];
    // set of nums1
    let set1 = new Set(nums1);
    // set of nums2
    let set2 = new Set(nums2);
    // iterate through nums1
    for (let curr of set1) {
        // if curr is not present in nums2,
        if (!set2.has(curr)) {
            // add to answer[0]
            answer[0].push(curr);
        }
    }
    for (let curr of set2) {
        // if curr is not present in nums1,
        if (!set1.has(curr)) {
            // add to answer[1]
            answer[1].push(curr);
        }
    }
    // return answer
     return answer;
};