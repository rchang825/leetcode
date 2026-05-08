/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // define graph and indegree
    let prereqs = {};
    let indegrees = new Array(numCourses).fill(0)
    // for all prerequisites
    for (let p of prerequisites) {
        // add edges from p[1] to p[0]
        if (prereqs[p[1]]) {
           prereqs[p[1]].push(p[0]); 
        } else {
           prereqs[p[1]] = [p[0]]; 
        }
        indegrees[p[0]]++;
    }
    // console.log(indegrees);
    // console.log(prereqs);

    // for all courses to be taken, at least one course must have no prerequisites (indegree of 0)
    // define res path []
    let path = [];
    // add all courses with 0 indegree to queue
    let Q = [];
    for (let i = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            Q.push(i);
        }
    }
    // process these courses and add to path
    while (Q.length) {
        let course = Q.shift();
        if (prereqs[course]) {
            for (let dependent of prereqs[course]) {
                indegrees[dependent]--;
                if (indegrees[dependent] === 0) {
                    Q.push(dependent);
                }
            }
        }

        path.push(course);
    }


    // return path if it has numCourses elements
    if (path.length === numCourses) {
      return path;  
    }
    return [];
};