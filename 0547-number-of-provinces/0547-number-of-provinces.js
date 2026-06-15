/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    // dfs
    let provinces = 0;
    // keep track of which cities have already been processed
    let visited = new Array(isConnected.length).fill(false);
    // so for each node (since there is no given "start")
    for (let i = 0; i < isConnected.length; i++) {
        // if it's unvisited
        if (!visited[i]) {
            // and try to visit all its edges with stack (dfs path to create the province)
            let stack = [i];
            while (stack.length) {
                let curr = stack.pop();
                visited[curr] = true;
                for (let j = 0; j < isConnected[curr].length; j++) {
                    if (isConnected[curr][j] === 1) {
                        if (!visited[j]) {
                            stack.push(j);
                        }
                    }
                }
            }
            // then add it to provinces
            provinces++;
        }
       
    }
    // return provinces
    return provinces;
};