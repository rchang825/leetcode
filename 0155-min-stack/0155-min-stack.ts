interface StackNode {
    val: number;
    min: number;
}
class MinStack {
    private stack: StackNode[];
    private next: number;
    constructor() {
        // stack
        this.stack = [];
        // index
        this.next = 0;
    }

    push(val: number): void {
        const currMin: number = this.next === 0 ? val : Math.min(val, this.stack[this.next - 1].min);
        this.stack[this.next] = {val: val, min: currMin};
        this.next++;
    }

    pop(): void {
        this.next--;
    }

    top(): number {
        return this.stack[this.next - 1].val;
    }

    getMin(): number {
        return this.stack[this.next - 1].min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */