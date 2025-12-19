function kClosest(points: number[][], k: number): number[][] {
    // sort points by euclidean distance
    function distAsc(a: number[], b: number[]): number {
        // a comes first if sqrt(a[0]^2 + a[1]^2) < sqrt(b[0]^2 + b[1]^2)
        // sqrt not needed if applying to both cases
        const aDist = a[0]**2 + a[1]**2;
        const bDist = b[0]**2 + b[1]**2;
        return aDist - bDist;
    }
    points.sort(distAsc);
    // return first k elements
    return points.slice(0, k);
};