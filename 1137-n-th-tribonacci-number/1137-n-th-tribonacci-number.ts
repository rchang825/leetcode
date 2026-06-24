function tribonacci(n: number): number {
    // known: T(0) = 0, T(1) = 1, T(2) = 1
    // all others = T(n - 1) + T(n - 2) + T(n - 3)
    // T(3) = T(2) + T(1) + T(0) = 1 + 1 + 0 = 2
    // tabulation: build from 0 to 37
    // memoization: build from n down to 0 (faster if n < 37)
    const T = new Array(38);
    T[0] = 0;
    T[1] = 1;
    T[2] = 1;
    for (let i = 3; i < 38; i++) {
        T[i] = T[i - 1] + T[i - 2] + T[i - 3];
    }
    return T[n];
};