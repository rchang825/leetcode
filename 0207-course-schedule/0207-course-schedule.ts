function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const reliances: number[] = new Array(numCourses).fill(0);
    const adjList: number[][] = new Array(numCourses).fill(null).map(() => new Array());
    for (let i: number = 0; i < prerequisites.length; i++) {
        let [course, prereq] = prerequisites[i];
        adjList[prereq].push(course);
        reliances[course]++;
    }
    let visited: number = 0;
    const queue: number[] = [];
    for (let i: number = 0; i < numCourses; i++) {
        if (reliances[i] === 0) {
            queue.push(i);
        }
    }
    while (queue.length > 0) {
        let curr: number = queue.shift();
        visited++;
        adjList[curr].forEach((neighbor: number) => {
            if (reliances[neighbor] === 1) {
                queue.push(neighbor);
            } else {
                reliances[neighbor]--;
            }
        });
    }
    return visited === numCourses;
};