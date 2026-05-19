/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // use shorter string as limit ("max" gcd can't be longer than shortest string)
    // gcd must have length that both string lengths can divide by
    // enforce str1 as shorter string
    if (str1.length > str2.length) {
        [str1, str2] = [str2, str1];
    }
    const N = str1.length;
    const M = str2.length;
    let substr = str1.split('').slice().join('');
    // starting with str1 as substring, remove characters when they don't work until substring = ''
    while (substr !== '') {
        console.log('trying', substr);
        let l = substr.length;
        // loop through both strings and check if there is a full instance of substr
        /** 
        hehe i = 0
        he
        he[0] == hehe[0]
        he[1] == hehe[1]
        he[0] == hehe[2]
        he[1] == hehe[3]
        */
        
        if (N % l === 0 && (M % l === 0)) {
            // console.log('N % l and M % l?', N, M, l);
            let isValid = true;
            for (let i = 0; i < N; i++) {
                if (substr[i % l] !== str1[i]) {
                    isValid = false;
                    break;
                }
            }
            if (isValid) {
                for (let i = 0; i < M; i++) {
                    if (substr[i % l] !== str2[i]) {
                        isValid = false;
                        break;
                    }
                }
            }
            if (isValid) {
                return substr;
            }
        }
        substr = substr.substring(0, l - 1);
    }
    // return substr
    return substr;
};