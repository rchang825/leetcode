/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(startGene, endGene, bank) {
    // startGene might not be in bank
    const Q = [];
    const visited = new Set();
    Q.push(startGene);
    visited.add(startGene);
    let steps = 0;
    const chars = ['A', 'C', 'G', 'T'];
    while (Q.length) {
        let levelSize = Q.length;
        for (let i = 0; i < levelSize; i++) {
            let curr = Q.shift();
            if (curr === endGene) {
                return steps;
            }
            for (let c of chars) {
                for (let j = 0; j < 8; j++) {
                    let mutation = curr.substring(0, j) + c + curr.substring(j + 1);
                    if (!visited.has(mutation)) {
                        if (bank.includes(mutation)) {
                            Q.push(mutation);
                            visited.add(mutation);
                        }
                    }
                }
            }
        }
        steps++;
    }
    return -1;
};