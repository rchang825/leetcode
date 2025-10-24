/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    // build adjacency lists to represent graph (each node points to prereqs)
    let graph = [...new Array(numCourses)].map(() => new Array());
    // console.log(graph);
    for (var i = 0; i < prerequisites.length; i++) {
        if (graph[prerequisites[i][0]]) {
            graph[prerequisites[i][0]].push(prerequisites[i][1]);
        } else {
            graph[prerequisites[i][0]] = [prerequisites[i][1]];
        }
    }
    console.log(graph);
    let visited = {};
    var detectCycle = function(node) {
        // console.log('curr', node);
        // base case: already visited, BAD, return true;
        if (visited[node]) {
            // console.log('cycle detected');
            return true;
        }
        // visit node
        visited[node] = true;
        for(var i = 0; i < graph[node].length; i++) {
            // console.log('neighbor', graph[node][i]);
            if (detectCycle(graph[node][i])) {
                // console.log('cycle detected');
                return true;
            }
        }
        // backtrack
        visited[node] = false;
        // don't need to access node again
        graph[node] = [];
        return false;
    }
    for (var i = 0; i < numCourses; i++) {
        if (detectCycle(i)) {
            return false;
        }
    }
    return true;
};