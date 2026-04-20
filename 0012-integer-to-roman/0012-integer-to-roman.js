/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const r = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const d = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    let roman = [];
    for (let i = 0; i < r.length; i++) {
        let dec = d[i];
        while (dec <= num) {
            roman.push(r[i]);
            num -= dec;
        }
        if (num === 0) {
            return roman.join('');
        }
    }
};