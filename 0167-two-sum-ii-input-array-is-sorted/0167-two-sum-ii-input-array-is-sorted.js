/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // iterate through numbers, fixing first num
    for (let i = 0; i < numbers.length; i++) {
        // calculate second num as target - first num
        let addend = target - numbers[i];
        // iterate to find second num from first num index + 1
        let j = i + 1;
        while (j < numbers.length) {
            if (numbers[j] === addend) {
                // if found, return indices
                return [i + 1,j + 1];
            } else if (numbers[j] > addend) {
                break;
            }
            j++;
        }
    }
};