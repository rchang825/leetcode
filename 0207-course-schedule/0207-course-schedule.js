/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let indegree = [];
    for (var i = 0; i < numCourses; i++) {
        indegree[i] = 0;
    }
    // console.log(indegree);
    let graph = new Array(numCourses);
    // console.log(graph);
    prerequisites.forEach((prereq) => {
        if (!graph[prereq[1]]) {
            graph[prereq[1]] = [prereq[0]];
        } else {
            graph[prereq[1]].push(prereq[0]);
        }
        indegree[prereq[0]] += 1;
    });
    // console.log(graph);
    // console.log('indegree', indegree);
    let queue = [];
    for (var j = 0; j < numCourses; j++) {
        // console.log('indegree[j]', indegree[j]);
        if (indegree[j] == 0) {
            queue.push(j);
        }
    }
    // console.log(queue);
    let visited = 0;
    while (queue.length !== 0) {
        let curr = queue.shift();
        // console.log(curr);
        visited++;
        if (graph[curr]) {
            graph[curr].forEach((neighbor) => {
                indegree[neighbor] -= 1;
                if (indegree[neighbor] === 0) {
                    queue.push(neighbor);
                }
            });
        }
    }
    return numCourses === visited;
};