function productExceptSelf(nums: number[]): number[] {
    /*
    [1,2,3,4]
    pref:  [ 1, 1, 2, 6]
             *  *  *  *
    suff:  [24,12, 4, 1]
             =  =  =  =
    final: [24,12, 8, 6]
    */
   const n: number = nums.length;
   const pref: number[] = new Array(n);
   const suff: number[] = new Array(n);
   pref[0] = 1;
   suff[n - 1] = 1;
   for (let f: number = 1, b: number = n - 2; f < n; f++, b--) {
        pref[f] = pref[f - 1] * nums[f - 1];
        suff[b] = suff[b + 1] * nums[b + 1];
   }
   for (let i: number = 0; i < n; i++) {
        nums[i] = pref[i] * suff[i];
   }
   return nums;
};