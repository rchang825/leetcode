/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function (maze, entrance) {
    // find shortest path length from entrance to exit (any . along first/last row or first/last col)

    // start from entrance
    let q = [[entrance, 0]];

    let visited = new Array(maze.length).fill(0).map(() => new Array(maze[0].length).fill(false));

    // bfs
    while (q.length) {
        // dequeue
        let [[r, c], dist] = q.shift();

        // if location is exit, return dist -> will be shortest path automatically
        if (r === 0 || r === maze.length - 1 || c === 0 || c === maze[r].length - 1) {
            if (entrance[0] !== r || entrance[1] !== c) { // entrance can't be exit
              return dist;  
            }
        }
        // queue up all unvisited . around location with dist + 1
        // up
        if (r > 0) {
            if (maze[r - 1][c] === '.' && !visited[r - 1][c]) {
                q.push([[r - 1, c], dist + 1]);
                visited[r - 1][c] = true;
            }
        }
        // down
        if (r < maze.length - 1) {
            if (maze[r + 1][c] === '.' && !visited[r + 1][c]) {
                q.push([[r + 1, c], dist + 1]);
                visited[r + 1][c] = true;
            }
        }
        // left
        if (c > 0) {
            if (maze[r][c - 1] === '.' && !visited[r][c - 1]) {
                q.push([[r, c - 1], dist + 1]);
                visited[r][c - 1] = true;
            }
        }
        // right
        if (c < maze[0].length - 1) {
            if (maze[r][c + 1] === '.' && !visited[r][c + 1]) {
                q.push([[r, c + 1], dist + 1]);
                visited[r][c + 1] = true;
            }
        }
    }
    // return -1 if no exit/no exit can be reached
    return -1;
};