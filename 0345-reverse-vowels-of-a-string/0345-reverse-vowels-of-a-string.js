/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // define vowels
    const vowels = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);
    // separate s into array for easier manipulation
    const strArr = s.split('');
    // two pointers (front and back)
    let front = 0;
    let back = strArr.length;
    // iterate until front and back meet
    while (front < back) {
        // move front forwards if vowel
        if (!vowels.has(strArr[front])) {
            front++;
        }
        // move back backwards if vowel
        if (!vowels.has(strArr[back])) {
            back--;
        }
        if (vowels.has(strArr[front]) && vowels.has(strArr[back])) {
            // switch characters
            [strArr[front], strArr[back]] = [strArr[back], strArr[front]];
            // increment front
            front++;
            // decrement back
            back--;
        }
    }
    // return array as string
    return strArr.join('');
};