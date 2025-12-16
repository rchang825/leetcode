function tribonacci(n: number): number {
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