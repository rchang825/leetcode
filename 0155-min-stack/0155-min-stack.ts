class MinStack {
    private stack: number[];
    private min: number[];
    private next: number;
    constructor() {
        // stack
        this.stack = [];
        // min stack
        this.min = [];
        // index
        this.next = 0;
    }

    push(val: number): void {
        this.stack[this.next] = val;
        this.min[this.next] = this.next === 0 ? val : Math.min(val, this.min[this.next - 1]);
        this.next++;
    }

    pop(): void {
        this.next--;
    }

    top(): number {
        return this.stack[this.next - 1];
    }

    getMin(): number {
        return this.min[this.next - 1];
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