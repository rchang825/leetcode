/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcd = function (a, b) {
    if (b === 0){
        return a;
    }
    return gcd(b, a % b);
}
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 === str2 + str1) {
        const N = str1.length;
        const M = str2.length;
        const l = gcd(N, M);
        return str1.substr(0, l);
    }
     return '';
};