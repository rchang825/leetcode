/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function(a, b, c) {
    // convert a, b, and c to binary
    let aBinary = a.toString(2);
    let bBinary = b.toString(2);
    let cBinary = c.toString(2);

    let flips = 0;
    // pad so all binaries are same length
    const l = Math.max(aBinary.length, bBinary.length, cBinary.length);
    aBinary = aBinary.padStart(l, "0");
    bBinary = bBinary.padStart(l, "0");
    cBinary = cBinary.padStart(l, "0");

    // console.log(aBinary, bBinary, cBinary);
    // increment if both a[i] and b[i] does not match c[i]
    for (let i = 0; i < cBinary.length; i++) {
        let curr = cBinary[i];
        if (curr === '0') {
            if (aBinary[i] === '1' && bBinary[i] === '1') {
                // console.log('need to turn two 1 into 0');
                flips += 2;
            } else {
                if (aBinary[i] === '1' || bBinary[i] === '1') {
                    // console.log('need to turn one 1 into 0');
                    flips++;
                }
            }
        } else {
            if (aBinary[i] === '0' && bBinary[i] === '0') {
                // console.log('need to turn one 0 into 1');
                flips++;
            }
        }
    }
    // return res
    return flips;
}