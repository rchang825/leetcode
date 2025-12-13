function validateCoupons(code: string[], businessLine: string[], isActive: boolean[]): string[] {
    // identify valid coupons
    // define validCoupons array
    const validCoupons: string[][] = [];
    const regex = /^[A-Za-z0-9_]+$/;
    // iterate through coupons with one pointer
    for (let i: number = 0; i < code.length; i++) {
        // if code not empty and only alphanumeric and underscores (regex?)
        // console.log(code[i], 'matches regex?', regex.test(code[i]));
        if (regex.test(code[i])) {
            // console.log(code[i], 'valid code');
            // if busLine is electronics, grocery, pharmacy, restaurant
            let category: string = businessLine[i];
            if (category === 'electronics' || category === 'grocery' || 
                category === 'pharmacy' || category === 'restaurant') {
                    // console.log(businessLine[i], 'valid business line');
                // if isActive
                if (isActive[i]) {
                    // coupon is valid
                    // console.log('and is active, adding!');
                    // save coupon with code and businessLine to validCoupons
                    validCoupons.push([code[i], businessLine[i]]);
                }
            }
        }
    }
    // console.log(validCoupons);
    // return codes of valid coupons sorted by businessLine and code
    return validCoupons.sort((a: string[], b: string[]) => {
        // businessLine in ascending order
        
        if (a[1] < b[1]) {
            return -1;
        } 
        if (a[1] > b[1]) {
            return 1;
        } 
        // code in ascending order if businessLine same
        if (a[0] < b[0]) {
            return -1;
        } 
        if (a[0] > b[0]) {
           return 1; 
        } 
        return 0;
        
    }).map((coupon) => coupon[0]);
};