function minimumBoxes(apple: number[], capacity: number[]): number {
    capacity.sort((a, b) => a - b);
    const m: number = capacity.length;
    let curr: number = 0;
    let res: number = 0;
    const target: number = apple.reduce((sum, num) => sum + num);
    // console.log(target);
    for (let i: number = m - 1; i >= 0; i--) {
        curr += capacity[i];
        res++;
        if (curr >= target) {
            return res;
        }
    }
    return curr >= target ? res : -1;
};