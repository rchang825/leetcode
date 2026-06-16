/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // equation[i] -> [a, b], a -> b has weight of values[i], representing a / b = weight
    /* 
        equations = [["a","b"],["b","c"]], 
        values = [2.0,3.0], 
        queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]

        a: [b, 2.0]
        b: [a, 0.5], [c, 3.0]
        c: [b, 0.3333]
        
        a -> c = a -> b (2.0) -> c (3.0) = 6.0
        b -> a = b -> a (0.5)
        c -> a = c -> b (0.333) -> a (0.5) = 0.167

        make adj list using all known variables in equations
        for each element e in equations equations[i]
            create edge from e[0] to e[1] with weight values[i]
            create edge from e[1] to e[0] with weight 1 / values[i]
        find path from query[0] to query[1] and perform * on weights
    */
    let adj = new Map();
    for (let i = 0; i < equations.length; i++) {
        let [a, b] = equations[i];
        if (adj.has(a)) {
            adj.get(a).push([b, values[i]]);
        } else {
            adj.set(a, [[b, values[i]]]);
        }
        if (adj.has(b)) {
            adj.get(b).push([a, 1 / values[i]]);
        } else {
            adj.set(b, [[a, 1 / values[i]]]);
        }
    }
    var calculate = function(a, b, quotient, visited) {
        // dfs to find any path from a to b and return the product of weights in path or return -1.0
        if (a === b) {
            return quotient;
        }

        visited.add(a);

        for (let node of adj.get(a)) {
            if (!visited.has(node[0])) {
                let res = calculate(node[0], b, quotient * node[1], visited);
                if (res !== -1.0) {
                    return res;
                }
            }
            
        }
        return -1.0;
    }

    let res = [];

    for (let q of queries) {
        if (!adj.has(q[0]) || !adj.has(q[1])) {
            res.push(-1.0);
        } else if (q[0] === q[1]) {
            res.push(1.0);
        } else {
            res.push(calculate(q[0], q[1], 1.0, new Set()));
        }
    }

    return res;
}