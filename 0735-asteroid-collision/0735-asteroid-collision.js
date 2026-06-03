/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
     let stack = [];
     for (a of asteroids) {
        let add = true;
        // positive, add!
        if (a > 0) {
            stack.push(a);
        } else {
            while (stack.length && stack[stack.length - 1] > 0) { // collision if neg goes after pos!
                let comparator = Math.abs(a) - Math.abs(stack[stack.length - 1]);
                // case 1: both explode
                if (comparator === 0) {
                    stack.pop();
                }
                if (comparator > 0) {
                // case 2: neg overpowers (LOOP whilst popping)
                    stack.pop();
                // last check for whether to add or explode neg
                } else {
                // case 3: pos overpowers (do not add neg)
                    add = false;
                    break;
                }
            }
            if (add) {
                stack.push(a);
            }
        }
     }
    return stack;
};