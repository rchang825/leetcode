function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // graph (adjacency list)
    // keep a visited list
    /*
        [[0,1],[1,2],[2,3],[3,4]] (5 courses)
        0: 1
        1: 2
        2: 3
        3: 4
        4: 
        push on prereqs
        detect cycles
        pr of 0 is 1, visit 1, pr of 1, visit 2, pr of 2, visit 3, pr of 3, visit 4, no prs
        empty -> can take all courses
        [[0,1],[1,2],[2,0],[3,2]] (4 courses)
        0: 1
        1: 2
        2: 0
        3: 2
        pr of 0 is 1, visit 1, pr of 1, visit 2, pr of 2, visit 0, 0 already visited!
        cycle -> cannot take all courses
    */
    const indegrees: number[] = new Array(numCourses).fill(0);
    const adjList: number[][] = new Array(numCourses).fill(null).map(() => new Array());
    for (let i: number = 0; i < prerequisites.length; i++) {
        let [course, prereq] = prerequisites[i];
        adjList[prereq].push(course);
        indegrees[course]++;
    }
    // console.log(adjList);
    let visited = 0;
    const queue = [];
    for (let i: number = 0; i < numCourses; i++) {
        if (indegrees[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.length > 0) {
        let curr = queue.shift();
        visited++;
        adjList[curr].forEach((neighbor: number) => {
            if (indegrees[neighbor] === 1) {
                queue.push(neighbor);
            } else {
                indegrees[neighbor]--;
            }
        });
    }
    return visited === numCourses;
};