/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    /* frequency map
    possible if max freq <= s.length / 2 rounded up
    aab: max freq 2, 3 chars / 2 rounded up = 2, possible
    aaab: max freq 3, 4 chars / 2 = 2, impossible
    generate rearrangement by iterating through map from freq desc
    aaabbbc: max freq 3, 7 chars / 2 rounded up = 4, possible
    a: 3
    b: 3
    c: 1
    abcabab
    */
    const counts = {};
    const sArr = s.split('');
    let maxFreq = 0;
    for (let c of sArr) {
        if (!counts.hasOwnProperty(c)) {
            counts[c] = 0;
        }
        counts[c] += 1;
        maxFreq = Math.max(maxFreq, Number(counts[c]));
    }
    // console.log(counts);
    const isPossible = maxFreq <= Math.ceil(s.length / 2);
    if (!isPossible) {
        // console.log(maxFreq, '>', Math.ceil(s.length / 2));
        return '';
    }
    const res = [];
    while (res.length !== s.length) {
        // add chars in couples by freq
        let curr = Object.keys(counts).sort((a, b) => {
            return counts[b] - counts[a];
        });
        res.push(curr[0]);
        // console.log(res.join(''));
        if (counts[curr[0]] === 1) {
            delete counts[curr[0]];
        } else {
            counts[curr[0]] -= 1;
        }
        if (curr.length > 1) {
            res.push(curr[1]);
            if (counts[curr[1]] === 1) {
                delete counts[curr[1]];
            } else {
                counts[curr[1]] -= 1;
            }
            // console.log(res.join(''));

        }
    }
    return res.join('');
};