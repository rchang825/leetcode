/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    // define mod constant
    let MOD = 10 ** 9 + 7;
    // initialize prefix/suffix maps
    let freqPrev = {};
    let freqNext = {};
    // initialize res
    let res = 0;

    // iterate through nums to complete freqNext
    nums.forEach((num) => {
        if (freqNext.hasOwnProperty(num)) {
            freqNext[num]++;
        } else {
            freqNext[num] = 1;
        }
    });

    // iterate through all j's
    nums.forEach(num => {
        // update freqNext
        freqNext[num]--;

        // update res with results from freqPrev and freqNext
        // find i (left of j)
        let left = freqPrev[num * 2] || 0;
        // find k (right of j)
        let right = freqNext[num * 2] || 0;
        res += left * right % MOD;
        res %= MOD;

        // update freqPrev
        if (freqPrev[num]) {
            freqPrev[num]++;
        } else {
            freqPrev[num] = 1;
        }
    });
    return res;
}
var specialTriplets1 = function(nums) {
    // define constants
    let MOD = 10 ** 9 + 7;
    // frequency map
    let freq = {};
    nums.forEach((num) => {
        if (freq.hasOwnProperty(num)) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    });
    // define res
    let res = 0;
    // define prefix array
    let pref = {};
    // iterate through j's
    let left = 0;
    let right = 0;
    nums.forEach((num) => {
        let target = num * 2;
        if (pref.hasOwnProperty(target)) {
            left = pref[target];
        } else {
            pref[target] = 0;
            left = 0;
        }
        if (pref.hasOwnProperty(num)) {
            pref[num]++;
        } else {
            pref[num] = 1;
        }
        right = (freq.hasOwnProperty(target) ? freq[target] : 0) - (pref.hasOwnProperty(target) ? pref[target] : 0);
        res += (left * right) % MOD;
        res %= MOD;
    });
    // return res
    return res;
}
var specialTripletsWIP = function(nums) {
    // define constants
    let n = nums.length;
    let MOD = 10 ** 9 + 7
    // define bookends i and k
    let i = 0;
    let k = n - 1
    // define res
    let res = 0;
    while(i < n - 2) {
        if (k <= i) {
            i++;
            k = n - 1;
            break;
        }
        if (nums[i] === nums[k]) {
            console.log('pair found at', i, 'and', k, ':', nums[i], nums[k]);
            // look for j
            let target = nums[i] / 2;
            console.log('looking for', target);
            // return early if not a whole number
            if (target % 1 > 0) {
                break;
            }
            for(var curr = i + 1; curr < k; curr++) {
                if (nums[curr] === target) {
                    // target found
                    res++;
                    res %= MOD;
                }
            }
            i++;
            k = n - 1;
        } else {
            k--;
        }
        
    }
    return res;
};