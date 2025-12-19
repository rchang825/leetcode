function numberCount(a: number, b: number): number {
    // 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    let res: number = 0;
    for (let i: number = a; i < b + 1; i++) {
        let numArr: string[] = i.toString().split('');
        if (new Set(numArr).size === numArr.length) {
            res++;
        }
    }
    return res;
};