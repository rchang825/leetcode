/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // map number to letter
    const letters = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']],
    ]);
    const res = [];
    // starting with a curr of empty string until curr length matches digits length,
        // add on every possible letter for each digit, building permutations
    var translate = function(curr, i) {
        if (i === digits.length) {
            res.push(curr);
            return;
        }
        // otherwise
        // recurse with every possible letter for next digit
        for (let letter of letters.get(digits[i])) {
            translate(curr + letter, i + 1);
        } 
    }
    translate('', 0);
    return res;
};