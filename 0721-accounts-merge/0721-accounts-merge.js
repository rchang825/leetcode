/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    let graph = {};
    let name = {};
    for (var account of accounts) {
        for (var i = 1; i < account.length; i++){
            let email = account[i];
            if (!graph.hasOwnProperty(email)) {
                graph[email] = new Set();
            }
            name[email] = account[0];
            if (i > 1) {
                graph[email].add(account[i - 1]);
                graph[account[i - 1]].add(email);
            }
        }
    }
    let visited = new Set();
    let res = [];

    for (var email of Object.keys(graph)) {
        if (!visited.has(email)) {
            let stack = [email];
            let mergedAcc = [];
            while (stack.length > 0) {
                let curr = stack.pop();
                if (!visited.has(curr)) {
                    visited.add(curr);
                    mergedAcc.push(curr);
                    for (var neighbor of graph[curr]) {
                        stack.push(neighbor);
                    }
                }
            }
            mergedAcc.sort();
            res.push([name[email], ...mergedAcc]);
        }
    }
    return res;
};