/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  // must contain same amount of letters
  if (s.length !== t.length) {
    return false;
  }
  // frequency map of s
  let sCounts = {};
  for (var i = 0; i < s.length; i++) {
    let ch = s.charAt(i);
    if (sCounts.hasOwnProperty(ch)) {
        sCounts[ch] = sCounts[ch] + 1;
    } else {
        sCounts[ch] = 1;
    }
  }
//   console.log(sCounts);
  // iterate through t and check against map
  let j = 0;
  while (j < t.length) {
    let ch = t.charAt(j);
    if (!sCounts.hasOwnProperty(ch)) {
        return false;
    }
    sCounts[ch] = sCounts[ch] - 1;
    // if count goes down to 0, remove from map
    if (sCounts[ch] === 0) {
        delete sCounts[ch];
    }
    j++;
  }
  // if map is empty,
  if (Object.keys(sCounts).length === 0) {
    // return true
    return true;
  }
  // return false
  return false;
};
