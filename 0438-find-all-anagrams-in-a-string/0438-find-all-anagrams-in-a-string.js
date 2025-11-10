/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) {
        return [];
    }
    // frequency map of chars in p
    let counts = new Array(26).fill(0);
    for (var i = 0; i < p.length; i++) {
        counts[p.charCodeAt(i) - 97]++;
    }
    // console.log('p counts\n', counts.join(''), '\n*******');
    let res = [];
    let left = 0;
    let right = 0;
    let currCounts = new Array(26).fill(0);
    while (left <= right && right < s.length) {
        currCounts[s.charCodeAt(right) - 97]++;
        if (right - left + 1 === p.length) {
            // console.log('currCounts\n', currCounts.join(''), '\n*******');
            if (currCounts.join('') === counts.join('')) {
                res.push(left);
            } 
            currCounts[s.charCodeAt(left++) - 97]--;
        } 
        right++;
    }
    return res;
};