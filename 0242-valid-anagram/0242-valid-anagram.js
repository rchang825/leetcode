/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // frequency map of s and match it to t
    let map = {};
    for (var i = 0; i < s.length; i++) {
        if (map.hasOwnProperty(s[i])) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    for (var j = 0; j < t.length; j++) {
        if (map.hasOwnProperty(t[j])) {
            if (map[t[j]] === 1) {
                delete map[t[j]];
            } else {
                map[t[j]]--;
            }
        } else {
            return false;
        }
    }
    return Object.keys(map).length === 0;
};