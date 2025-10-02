/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // frequency map of numbers and indices array
    // loop through again and check if addend (target - num) is in map
        // return indices if so
    // return []
    let addends = {};
    for (var index = 0; index < nums.length; index++) {
        if (addends.hasOwnProperty(nums[index])) {
            addends[nums[index]].push(index);
        } else {
            let newArr = [];
            newArr.push(index);
            addends[nums[index]] = newArr;
        }
    }
    // console.log(addends);
    let found = [];
    let i = 0;
    while (i < nums.length && found.length === 0) {
        let searching = target - nums[i];
        // console.log('looking for', searching);
        if (addends.hasOwnProperty(searching)) {
            // console.log('found!');
            if (searching == nums[i]) {
                if (addends[searching].length > 1) {
                    found.push(i);
                    found.push(addends[searching][1]);
                    // console.log('dupe', found);
                } 
            }
            else {
                    found.push(i);
                    found.push(addends[searching][0]);
                    // console.log('found', found);
                }
            // console.log(found);
        }
        i++;
    }
    return found;
};