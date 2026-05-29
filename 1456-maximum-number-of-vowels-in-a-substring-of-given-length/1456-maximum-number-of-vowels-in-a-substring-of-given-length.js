/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let currVowels = 0;
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            currVowels++;
        }
    }
    let maxVowels = currVowels;
    let left = 0;
    let right = k;
    while (right < s.length) {
        if (vowels.has(s[left++])) {
            currVowels--;
        }
        if (vowels.has(s[right++])) {
            currVowels++;
        }
        maxVowels = Math.max(currVowels, maxVowels);
    }
    return maxVowels;
};