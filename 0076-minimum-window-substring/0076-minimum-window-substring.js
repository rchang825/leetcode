/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // frequency map for chars in t
    let counts = {};
    for (var ch of t) {
        if (counts.hasOwnProperty(ch)) {
            counts[ch]++;
        } else {
            counts[ch] = 1;
        }
    }
    // console.log(counts);
    // helper: containsChars 
    var containsChars = function() {
        // checks against all counts to make sure minimum frequency matches
        for (let letter of Object.keys(counts)) {
            if (!currCounts.hasOwnProperty(letter)) {
                return false;
            }
            if (currCounts[letter] < counts[letter]) {
                return false;
            }
        }
        return true;
    }
        
    // left and right pointers
    let left = 0;
    let right = 0;
    let currCounts = {};
    let min = Infinity;
    let res = '';
    // sliding window: open to the right until reached end of s
    while (right < s.length) {
        // console.log('opening to right');
        // add right to frequency
        if (currCounts.hasOwnProperty(s[right])) {
            currCounts[s[right]]++;
        } else {
            currCounts[s[right]] = 1;
        }
        // console.log(currCounts);
        // if containsChars is true
        if (containsChars()) {
        // close left and remove from frequency until containsChars isn't true
            while (containsChars()) {
                // console.log('closing left and attempting to remove', s[left]);
                if (currCounts[s[left]] === 1) {
                    delete currCounts[s[left]];
                } else {
                    currCounts[s[left]]--;
                }
                left++;
            }
            // console.log('right', right, 'left', left);
            // save this length and substring
            if (min > right - left - 1) {
                min = right - left;
                res = s.substring(left - 1, right + 1);
                // console.log('min substring is now', res);
            }
        }
        right++;
    }
    return res;
};