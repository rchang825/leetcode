/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharactersStack = function(properties) {
    // brute force: for each character, compare against every other character
    /*
    [1,5]
    is [10,4] greater on both accounts? no
    sort one way (atk)
    [1,5],[4,3],[10,4]
    iterate through, pushing defs onto stack
    add 5 to stack
    is 3 > 5? no, add 3 to stack
    is 4 > 3? yes, so pop 3, increment weakChars
        keep popping and incrementing weakChars if curr > top
    */
    var atkAscDefDesc = function(a,b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        }
        return b[1] - a[1];
    }
    const sorted = properties.sort(atkAscDefDesc);
    // console.log('sorted:', sorted);
    const stk = [];
    let weakChars = 0;
    for (let character of sorted) {
        while (stk.length && character[0] !== stk[0] && character[1] > stk[0][1]) {
            // console.log(`${character} has higher def than top of stack ${stk[0]}`);
            weakChars++;
            stk.shift(); // determined to be a weak character, remove
        }
        stk.unshift(character);
    }
    return weakChars;
};
var numberOfWeakCharacters = function(properties) {
    // brute force: for each character, compare against every other character
    /*
    [1,5]
    is [10,4] greater on both accounts? no
    sort one way (atk)
    [1,5],[4,3],[10,4]
    iterate through, pushing defs onto stack
    add 5 to stack
    is 3 > 5? no, add 3 to stack
    is 4 > 3? yes, so pop 3, increment weakChars
        keep popping and incrementing weakChars if curr > top
    */
    var atkAscDefDesc = function(a,b) {
        if (a[0] > b[0]) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        }
        return b[1] - a[1];
    }
    const sorted = properties.sort(atkAscDefDesc);
    // console.log('sorted:', sorted);
    let maxDef = 0;
    let weakChars = 0;
    for (let character of sorted.reverse()) {
        // if current def < maxDef
        if (character[1] < maxDef) {
            // increment weakChars
            weakChars++;
        } else {
        // else
            // maxDef = current def
            maxDef = character[1];
        }
    }
    return weakChars;
};