function tribonacci(n: number): number {
    if (n < 1) {
        return 0;
    }
    if (n < 3) {
        return 1;
    }
    let a = 0;
    let b = 1;
    let c = 1;
    
    let res = 0;
    for (let i: number = 3; i <= n; i++) {
        res = a + b + c
        a = b;
        b = c;
        c = res;
    }
    return res;
}
function tribonacciTab(n: number): number {
    // known/base cases
    // 0: 0
    // 1: 1
    // 2: 1
    const trib: number[] = [0, 1, 1];
    for (let i: number = 3; i <= n; i++) {
        trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
    }
    return trib[n];
};