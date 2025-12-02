/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function(points) {
    // factorial helper with memo
    let f = {0: 1, 1: 1};
    var factorial = function(num) {
        if (f.hasOwnProperty(num)) {
            return f[num];
        } 
        f[num] = num * factorial(num - 1);
        return f[num];
    };
    // horizontal sides
    // 2 pairs of 2 points with same y 
    // x does not matter
    /*
    points = [[1,0],[2,0],[3,0],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[2,2],[3,2]]
    map of x coord for y
    0: 1, 2, 3 -> 2 + 1 = 3 
    1: 1, 2, 3, 4, 5, 6 -> 5 + 4 + 3 + 2 + 1 = 15 = 6!/(2!(4)!) = 720/48 = 15
    2: 2, 3 -> 1 

    3 * 15 = 45
    3 * 1 = 3
    15 * 1 = 15
    = 63
    */
    // iterate through points and make a map of y coordinates
    let y = {};
    points.forEach((point) => {
        if(y.hasOwnProperty(point[1])) {
            y[point[1]]++;
        } else {
            y[point[1]] = 1;
        }
    });
    // console.log(y);
    // get number of unique pairs (horizontal lines) for each y
    // const pairFactorial = 2;
    // for(let [level, count] of Object.entries(y)) {
    //     if (count <= 1) {
    //         delete y[level];
    //     } else {
    //         let fact = factorial(count) / (2 * factorial(count - 2));
    //         y[level] = fact;
    //     }
    // }
    // console.log(y);
    // define mod
    const MOD = 10n**9n + 7n;
    // define res
    // let res = 0;
    // for each pair of y's, multiply and add to res
    // let levels = Object.values(y);
    // for(var i = 0; i < levels.length; i++) {
    //     for(var j = i + 1; j < levels.length; j++) {
    //         res += y[levels[i]] * y[levels[j]];
    //         res %= MOD;
    //     }
    // }
    let res = 0n;
    let sum = 0n;
    for (let [level, count] of Object.entries(y)) {
        let edge = (BigInt(count) * BigInt(count - 1)) / 2n;
        res += edge * sum;
        res %= MOD;
        sum += edge;
        sum %= MOD;
    }
    // return res
    return Number(res);
};