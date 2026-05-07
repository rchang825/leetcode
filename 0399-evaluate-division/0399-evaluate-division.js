/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // a / b = 2 -> a / b = 2 and b / a = 1/2
    const edges = new Map();

    for (let i = 0; i < equations.length; i++) {
        let [dividend, divisor] = equations[i];
        if (!edges.has(dividend)) {
            edges.set(dividend, new Map());
        }
        if (!edges.has(divisor)) {
            edges.set(divisor, new Map());
        }
        edges.get(dividend).set(divisor, values[i]);
        edges.get(divisor).set(dividend, 1 / values[i]);
    }

    var backtrack = function(dividend, divisor, interm, visited) {
        visited[dividend] = true;
        let res = -1.0;
        let neighbors = edges.get(dividend);
        if (neighbors.has(divisor)) {
            res = interm * neighbors.get(divisor);
        } else {
            for (const [nextNode, value] of neighbors.entries()) {
                if (!visited[nextNode]) {
                    res = backtrack(nextNode, divisor, interm * value, visited);
                    if (res !== -1.0) {
                        break;
                    }
                }
            }
        }
        delete visited[dividend];
        return res;
    }

    let res = [];
    for (let q of queries) {
        let [dividend, divisor] = q;
        if (!edges.has(dividend) || !edges.has(divisor)) {
            res.push(-1.0);
        } else if (dividend === divisor) {
            res.push(1.0);
        } else {
            visited = {};
            res.push(backtrack(dividend, divisor, 1, visited));
        }
    }
    return res;
};