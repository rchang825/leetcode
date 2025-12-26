function bestClosingTime(customers: string): number {
    const none: number[] = [];
    let penNone: number = 0;
    const some: number[] = [];
    let penSome: number = 0;
    for (let forwards: number = 0, backwards: number = customers.length - 1; forwards < customers.length; forwards++, backwards--) {
        none.push(penNone);
        some.push(penSome);
        if (customers[forwards] === 'N') {
            penNone++;
        } 
        if (customers[backwards] === 'Y') {
            penSome++;
        }
    }
    none.push(penNone);
    some.push(penSome);
    some.reverse();
    let minPen = none[0] + some[0];
    let res = 0;
    for (let i: number = 1; i < none.length; i++) {
        let pen = none[i] + some[i];
        if (pen < minPen) {
            minPen = pen;
            res = i;
        }
    }
    return res;
};