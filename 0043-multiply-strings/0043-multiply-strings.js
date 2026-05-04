/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    // right to left, one digit * one digit
    // keep track of a carry variable

    // set num1 to be the longer string
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1];
    }
    let carry = 0;
    let addends = [];
    let sizeOfProd = 0;
    // multiply each digit in num1 by one digit in num2, for each digit in num2
    for (let i = num2.length - 1; i >= 0; i--) {
        if (num2[i] === '0') {
            continue;
        }
        let interm = '';
        for (let j = num1.length - 1; j >= 0; j--) {
            let prod = parseInt(num1[j]) * parseInt(num2[i]);        
            prod += carry;
            if (prod > 9) {
                carry = Math.trunc(prod/10);
                prod %= 10;
            } else {
                carry = 0;
            }
            interm = prod.toString() + interm;
        }
        if (carry) {
            interm = carry.toString() + interm;
        }
        carry = 0;
        // console.log(interm);
        // add the zeros
        for (let z = 0; z < num2.length - i - 1; z++) {
            interm += '0';
        }
        addends.push(interm);
        sizeOfProd = Math.max(addends[addends.length - 1].length, sizeOfProd);
    }
    // add together everything in addends
    // console.log(addends);
    carry = 0;
    res = '';
    for (let i = 0; i < sizeOfProd; i++) {
        sum = 0;
        addends.forEach((a) => {
            if (i < a.length) {
                sum += parseInt(a[a.length - i - 1]);
            }
        });
        sum += carry;
        if (sum > 9) {
            carry = Math.trunc(sum/10);
            sum %= 10;
        } else {
            carry = 0;
        }
        // console.log('sum', sum);
        res = sum.toString() + res;
    }
    if (carry) {
        res = carry.toString() + res;
    }
    
    return res;
};