/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // is there a path to visit all rooms?
    // visited rooms array where true is visited
    let visited = new Array(rooms.length).fill(false);
    visited[0] = true;
    // numVisited counter
    let numVisited = 1;
    let stack = [];
    // starting from 0
    for (let edge of rooms[0]) {
    // add its edges to stack
        stack.push(edge);
    }
    // loop until stack is empty:
    while (stack.length) {
        // for each unvisited room popped from stack, and add its edges
        let room = stack.pop();
        if (!visited[room]) {
            // mark visited and increment numVisited when necessary
            for (let edge of rooms[room]) {
                stack.push(edge);
            }
            visited[room] = true;
            numVisited++;
        }
    }
    // if not all rooms have been visited, return false
    if (numVisited !== rooms.length) {
        return false;
    }
    // return true
    return true;
};