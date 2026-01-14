function productExceptSelf(nums: number[]): number[] {
    /*
    [1,2,3,4]
    pref:  [ 1, 1, 2, 6]
             *  *  *  *
    suff:  [24,12, 4, 1]
             =  =  =  =
    final: [24,12, 8, 6]
    */
   // one iteration forwards to get prefix products
   // another iteration backwards to get suffix products 
   // final iteration through both: product except self at i = pref[i] * suff[i]
   const n: number = nums.length;
   const pref: number[] = new Array(n);
   const suff: number[] = new Array(n);
   pref[0] = 1;
   suff[n - 1] = 1;
   let currPrefProd: number = 1;
   let currSuffProd: number = 1;
   for (let f: number = 1, b: number = n - 2; f < n; f++, b--) {
        currPrefProd *= nums[f - 1];
        currSuffProd *= nums[b + 1];
        pref[f] = currPrefProd;
        suff[b] = currSuffProd;
   }
   for (let i: number = 0; i < n; i++) {
        nums[i] = pref[i] * suff[i];
   }
   return nums;
};