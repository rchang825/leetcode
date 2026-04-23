/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    /*
    2D array
    one full zag = numRows + numRows - 2 characters
        spanning numRows - 1 columns
    total numCols = (s.length / (numRows * 2 - 2)) / (numRows - 1) + (1 if mod > 1?)

    first numRows chars = first column always going down
    diagonal for numRows - 2 always going up
    numRows chars column going down
    diagonal for numRows - 2 going up
    ...
    until no more chars in s
    return joined rows
    */
    if (numRows === 1 || s.length === 1) {
        return s;
    }
    let numCols = Math.floor((s.length / (numRows * 2 - 2))) * (numRows - 1);
    if (s.length % (numRows * 2 - 2) > 0) {
        numCols++;
    }
    // console.log('numCols', numCols);
    const zz = new Array(numRows).fill('').map((r) => new Array(numCols).fill(''));

    let r = 0;
    let c = 0;
    let i = 0;
    while (i < s.length) {
        // straight down
        while (r < numRows && i < s.length) {
            zz[r][c] = s[i];
            r++;
            i++;
        }
        c++;
        r -= 2;
        // diagonal up
        while (r > 0 && i < s.length) {
            zz[r][c] = s[i];
            c++;
            r--;
            i++;
        }
    }
    // console.log(zz.join('\n'));
    let str = '';
    zz.forEach((row) => {
        str += row.filter((c) => c !== '').join('');
    });
    return str;
};