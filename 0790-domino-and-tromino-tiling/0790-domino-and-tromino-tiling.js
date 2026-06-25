/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    /*
    special cases
    1: 1
    2: 2
    3: 5

    4: 11 = 2 * 5 + 1
    5: 24 = 2 * 11 + 2
    6: 53 = 2 * 24 + 5
    7: 117 = 2 * 53 + 11
    8: 258
    9: 569
    */
    // numTilings(n) = 2 * numTilings(n - 1) + numTilings(n - 3)
    const tilings = new Array(n + 1);
    tilings[0] = 0;
    tilings[1] = 1;
    tilings[2] = 2;
    tilings[3] = 5;
    const MOD = 10 ** 9 + 7;
    var getTilings = function(n) {
        if (tilings[n] !== undefined) {
            return tilings[n];
        }
        let res = 2 * getTilings(n - 1) + getTilings(n - 3);
        res %= MOD;
        tilings[n] = res;
        return res;
    }

    return getTilings(n);
};