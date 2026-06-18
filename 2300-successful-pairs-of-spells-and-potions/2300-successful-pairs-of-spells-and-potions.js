/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
// binary search -> return index of closest element to target that is >= than target
var getClosestIndex = function(potions, target, left, right) {
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (potions[mid] >= target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
}
var successfulPairs = function(spells, potions, success) {
    // cannot sort spells bc spells[i] should remain the same
    // can sort potions! asc
    potions = potions.sort((a, b) => a - b);
    // define pairs with equal size to spells
    let pairs = new Array(spells.length).fill(0); //intialize with 0
    // use spells to iterate through
    for (let i = 0; i < spells.length; i++) {
    // at each spell, product should be at least success
        // -> strength of potion should be at least success / strength of spell (rounded up)
        const min = Math.ceil(success / spells[i]);
        // console.log('need at least', min, 'for spell', spells[i]);
        // count how many potions are >= threshold
        // optimize -> use binary search to find closest?
        let p = getClosestIndex(potions, min, 0, potions.length);
        // console.log('weakest applicable potion is at', p, ':', potions[p]);
        // save count to pairs[i]
        if (p < potions.length) {
            pairs[i] = potions.length - p;
        } // otherwise, it stays 0
    }
    // return pairs
     return pairs;
};