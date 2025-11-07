/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let letters = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    let makeCombination = function(curr, index) {
        if (curr.length === digits.length) {
            res.push(curr);
            return curr;
        } 
        letters[digits[index]].forEach((letter) => {
            return makeCombination(curr + letter, index + 1);
        });
    }

    let res = [];
    makeCombination('', 0);
    return res;
};