/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // using extra space:
    // let reversed = [];
    // for (var i = s.length - 1; i >= 0; i--) {
    //     reversed.push(s[i]);
    //     console.log(s[i]);
    //     console.log(reversed);
    // }
    // for (var i = 0; i < s.length; i++) {
    //     s[i] = reversed[i];
    // } // only necessary to appease tester

    // two pointers (left and right)
    // swap using a temp
    // let left = 0;
    // let right = s.length - 1;
    // let temp;
    // while (left < right) {
    //     temp = s[left];
    //     s[left] = s[right];
    //     s[right] = temp;
    //     left++;
    //     right--;
    // }
    // return s;

    // super elite version using for loop
    let temp;
    for (var left = 0, right = s.length - 1; left < right; left++, right--) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
};