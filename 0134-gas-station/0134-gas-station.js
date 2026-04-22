/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
 var canCompleteCircuitBrute = function(gas, cost) {
    /*
        station: i
        keep track of tank starting at 0
        brute force: for each station i
            loop from i - i again
                fill up: tank += gas[i]
                if tank - cost[i] < 0
                    next
            return i
        return -1
    */
    let tank = 0;
    for (let i = 0; i < gas.length; i++) {
        console.log('considering starting from station', i);
        let curr = i + 1;
        if (curr === gas.length) {
            curr = 0;
        }
        tank = gas[i];
        console.log('tank is', tank);
        tank -= cost[i];
        if (tank < 0) {
            console.log('not enough to get to next station');
            continue;
        }
        while (curr !== i) {
            tank += gas[curr];
            console.log('tank is', tank);
            tank -= cost[curr];
            if (tank < 0) {
                console.log('not enough to get to next station');
                break;
            }
            curr++;
            if (curr === gas.length) {
                curr = 0;
            }
        }

        if (tank >= 0) {
            return i;
        }
    }
    return -1;
};

var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0;
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i] - cost[i];
    }
    if (totalGas < 0) {
        return -1;
    }

    let tank = 0;
    let station = 0;

    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        if (tank < 0) {
            station = i + 1;
            tank = 0;
        }
    }

    return station;
};
