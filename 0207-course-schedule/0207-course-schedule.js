/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let graph = new Array(numCourses);
    // build graph with adjacency list
    for (var i = 0; i < prerequisites.length; i++) {
        if (!graph[prerequisites[i][0]]) {
            graph[prerequisites[i][0]] = [prerequisites[i][1]];
        } else {
            graph[prerequisites[i][0]].push(prerequisites[i][1]);
        }
    }
    // console.log(graph);
    let visited = {};
    var dfs = function(course) {
        if (!graph[course]) {
            return true;
        }
        if (visited[course]) { // cycle detected
            return false;
        }
        // visit course
        visited[course] = true;
        for (var i = 0; i < graph[course].length; i++) { // check edges
            // return early if cycle detected
            if (!dfs(graph[course][i])) {
                return false;
            }
        }
        visited[course] = false; // backtrack
        graph[course] = []; // remove node and its edges
        return true;
    };
    // call dfs for all nodes in graph (all courses)
    for (var i = 0; i < numCourses; i++) {
        // return early if cycle detected
        if (!dfs(i)) {
            return false;
        }
    }
    return true;
};