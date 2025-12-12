function combinationSum(candidates: number[], target: number): number[][] {
    // define res
    const res: number[][] = new Array();
    // helper(currSum, curr) 
    function helper(currSum: number, curr: number[], index: number): void {
        // console.log('currSum', currSum);
        // if currSum = target
        if (currSum === target) {
            // console.log('target reached!');
            // add to res
            res.push(curr.slice());
            return;
        }
        // if currSum > target
        if (currSum > target) {
            // console.log('went over!');
            // return
            return;
        }

        // for all candidates
        for(let i: number = index; i < candidates.length; i++) {
            // console.log('trying to add', candidates[i], 'to', currSum, '...');
            // call helper(currSum + candidate, curr + candidate)
            curr.push(candidates[i]);
            helper(currSum + candidates[i], curr, i);
            curr.pop();
        }
    }
    // call helper starting from each candidate
    for(let i: number = 0; i < candidates.length; i++) {
        // console.log('starting with', candidates[i]);
        // call helper(currSum + candidate, curr + candidate)
        helper(candidates[i], [candidates[i]], i);
    }

    // return res
    return res;
};