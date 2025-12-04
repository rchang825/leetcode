/**
 * @param {string} directions
 * @return {number}
 */
var countCollisions = function(directions) {
        // remove leading L and trailing R
    let l = 0;
    while (directions.charAt(l) === 'L') {
        l++;
    }
    let r = directions.length - 1;
    while (directions.charAt(r) === 'R') {
        r--;
    }
    // convert to array for lower cost updating
    directions = directions.substring(l, r + 1).split('');
    // console.log(directions.join(''));
    // define res
    let res = 0;
    for (var i = 0; i < directions.length; i++) {
        if (directions[i] !== 'S') {
            res++;
        }
    }
    return res;
}
var countCollisionsS = function(directions) {
    /*
    directions = RLRSLL
    R, look right, will collide with L +2
    SSRSLL
    R, look right, will collide with S +1
    SSSSLL
    L, look left, will collide with S +1
    SSSSSL
    L, look left, will collide with S +1
    SSSSS
    all S, return 5
    directions = LLRR
    L, look left, will not collide
    LLRR
    L, look left, will not collide
    LLRR
    R, look right, will not collide
    LLRR
    R, look right, will not collide
    eos, return 0
    directions = LLRLRLLSLRLLSLSSSS
    remove leading L and trailing R
    RLRLLSLRLLSLSSSS
    R, look right, will collide with L +2
    SSRLLSLRLLSLSSSS
    R, look right, will collide with L +2
    SSSSLSLRLLSLSSSS
    L, look left, will collide with S +1
    SSSSSSLRLLSLSSSS
    L, look left, will collide with S +1
    SSSSSSSRLLSLSSSS
    R, look right, will collide with L +2
    SSSSSSSSSLSLSSSS
    L, look left, will collide with S +1
    SSSSSSSSSSSLSSSS
    L, look left, will collide with S +1
    SSSSSSSSSSSSSSSS
    all S's, done, return 10
    */
    // remove leading L and trailing R
    let l = 0;
    while (directions.charAt(l) === 'L') {
        l++;
    }
    let r = directions.length - 1;
    while (directions.charAt(r) === 'R') {
        r--;
    }
    // convert to array for lower cost updating
    directions = directions.substring(l, r + 1).split('');
    console.log(directions.join(''));
    // define res
    let res = 0;
    // iterate through directions
    let i = 0;
    while (i < directions.length) {
        let dir = directions[i];
        // if R, look right
        if (dir === 'R') {
            // if right is S
            // if (directions[i+1] === 'S') {
            //     // add 1
            //     res++;
            //     // change curr to S
            //     directions[i] = 'S';
            // }
            // if right is L
            if (directions[i+1] === 'L') {
                // add 1
                res += 2;
                // change curr and right to S
                directions[i] = 'S';
                directions[i+1] = 'S';
                // move curr
                i++;
            }
        }
        // if L, look left
        if (dir === 'L') {
            // if left is S
            if (directions[i-1] === 'S') {
                // add 1
                res++;
                // change curr to S
                directions[i] = 'S';
            }
        }
        // move curr
        i++;
    }
    // return res 
    return res;
};