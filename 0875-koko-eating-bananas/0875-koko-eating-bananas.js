/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var canEat = function(piles, speed, h) {
    let count = 0;

    for (const pile of piles) {
        count += Math.ceil(pile / speed);

        if (count > h) {
            return false;
        }
    }

    return true;
}
var minEatingSpeed = function(piles, h, left = 1, right = Math.max(...piles)) {
    /**
    if min h = piles.length
        k = max pile size
    k is always <= max pile size
    not sufficient to sum and divide bc if pile < k, will only eat pile (not always full k)
    set bounds: min of 1 and max of largest pile size
     */
    if (left >= right) {
        return left;
    }

    let mid = Math.floor((left + right) / 2);
    if (canEat(piles, mid, h)) {
        // try to move as far left as possible
        return minEatingSpeed(piles, h, left, mid);
    } else {
        return minEatingSpeed(piles, h, mid + 1, right);
    }
};