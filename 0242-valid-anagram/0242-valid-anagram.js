/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // turn strings into character arrays, sort, then back to strings
    // compare strings
    return s.split('').sort().join('') === t.split('').sort().join('');
};