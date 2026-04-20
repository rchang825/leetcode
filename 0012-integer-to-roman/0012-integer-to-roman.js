/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // make map of dec to rom
    const toRoman = {
        '1': 'I',
        '5': 'V',
        '10': 'X',
        '50': 'L',
        '100': 'C',
        '500': 'D',
        '1000': 'M',
        '4': 'IV',
        '9': "IX",
        '40': 'XL',
        '90': 'XC',
        '400': 'CD',
        '900': 'CM',
    };
    // const toSubRoman = {
    //     '4': 'IV',
    //     '9': "IX",
    //     '40': 'XL',
    //     '90': 'XC',
    //     '400': 'CD',
    //     '900': 'CM',
    // }

    const toRomanArr = Object.keys(toRoman).sort((a, b) => parseInt(b) - parseInt(a));
    // const toSubRomanArr = Object.keys(toSubRoman).sort((a, b) => parseInt(b) - parseInt(a));
    let roman = [];
    while (num > 0) {
    // convert num to string
    // let numStr = num.toString();
    // console.log('numStr', numStr);
    // let starts = numStr[0];
    let freq = 1;
    
    // if number does not start with 4 or 9
    // if (starts !== '4' && starts !== '9') {
        // find max dec (iteratively)
        for (let i = 0; i < toRomanArr.length; i++) {
            let dec = parseInt(toRomanArr[i])
            if (num % dec < num) {
                // freq = number / max dec
                freq = Math.floor(num / dec);
                // roman += max roman * freq
                for (let j = 0; j < freq; j++) {
                    roman.push(toRoman[dec]);
                }
                // number -= max dec * freq
                num -= dec * freq;
                break;
            }
        }
    // }
    // if number starts with 4 or 9
    //  else {
    //     // check for 4, 9, 40, 400, 900
    //     for (let i = 0; i < toSubRomanArr.length; i++) {
    //         let dec = parseInt(toSubRomanArr[i])
    //         if (num % dec < num) {
    //             // roman += max roman
    //             roman.push(toSubRoman[dec]);
    //             // number -= max dec
    //             num -= dec;
    //             break;
    //         }
    //     }
    //  }
    }
    // return roman
    return roman.join('');
};