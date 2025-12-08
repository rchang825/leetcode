/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    // define res
    let res = 0;
    // from 1 to n
    for (var i = 1; i <= n; i++) {
        // fix first num a -> get square
        let triple = i * i;
        // from 1 to  n
        for (var j = 1; j <= n; j++) {
            // fix b -> get square
            let sq = j * j;
            triple += sq;
            // if c exists and is whole number
            let c = Math.sqrt(triple);
            // console.log('looking for', i, '+', j, '=', c);
            if (c % 1 === 0 && c <= n) {
                // console.log(i, '+', j, '=', c);
                // increment res
                res++;
            } 
            // reset b
            triple -= sq;
        }
    }          
    // return res
    return res;
};