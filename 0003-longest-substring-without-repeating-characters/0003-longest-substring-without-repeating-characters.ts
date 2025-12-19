function lengthOfLongestSubstring(s: string): number {
  // sliding window
  // frequency map to validate (can be a set)
  let left: number = 0;
  let right: number = 0;
  let res = 0;
  let chars = new Set();
  // while right is within bounds
  while (right < s.length) {
    // if invalid
    if (chars.has(s[right])) {
        // remove character at left from map
        chars.delete(s[left]);
        // close left
        left++;
    } else {
    // if valid
        // add character at right to map
        chars.add(s[right]);
        // update res
        res = Math.max(res, chars.size);
        // open to right
        right++;
    }
  }
  // return res
  return res;
};