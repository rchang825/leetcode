/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    // curr counter
    let count = 1;
    // prev
    let prev = chars[0];
    // curr i
    let index = 0;
    for (let i = 1; i < chars.length; i++) {
        // if character is the same as prev
        if (chars[i] === prev) {
            // increment curr counter
            count++;
        } else {
            // otherwise
            // record prev and curr counter if > 1 (overwrite!)
            chars[index++] = prev;
            if (count > 1) {
                // count could be > 9, split so one digit as char
                let countArr = count.toString().split('');
                for (let digit of countArr) {
                    chars[index++] = digit;
                }
                count = 1;
            }
            // reset prev
            prev = chars[i];
        }
    }
    // final record
    chars[index++] = prev;
    if (count > 1) {
        let countArr = count.toString().split('');
        for (let digit of countArr) {
            chars[index++] = digit;
        }
        count = 1;
    }
    return index;
};