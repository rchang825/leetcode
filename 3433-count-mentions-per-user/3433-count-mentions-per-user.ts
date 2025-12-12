function countMentions(numberOfUsers: number, events: string[][]): number[] {
    // define mentions array
    const mentions: number[] = new Array(numberOfUsers).fill(0);
    // sort events by time
    events.sort((a, b) => {
        if (Number(a[1]) < Number(b[1])) {
            return -1;
        }
        if (Number(a[1]) == Number(b[1])) {
            if (a[0] === 'OFFLINE') {
                return -1;
            }
        }
    });
    // console.log(events);
    // all users are initially online
    // define online users object
    const online = new Set();
    const stack = [];
    const offline = {};
    for (let i: number = 0; i < numberOfUsers; i++) {
        online.add(i);
    }
    // iterate through events
    for (const e of events) {
        console.log(e);
        // if MESSAGE
        if (e[0] === 'MESSAGE') {
            // if ALL
            if (e[2] === 'ALL') {
                // increment mentions of all users
                // iterate through mentions array
                for(let i: number = 0; i < numberOfUsers; i++) {
                    console.log('mentioned', i);
                    // increment by 1
                    mentions[i]++;
                }
            } else if (e[2] === 'HERE') {
                // checks if any offline users should come back online for timestamp
                if (stack.length !== 1) {
                   console.log('next user to go back online is', stack[0]); 
                }
                while (stack.length !== 0 && (stack[0][1] <= Number(e[1]))) {
                    // console.log('because', (stack[0][1] <= Number(e[1])), ',');
                    let user: number = stack.shift()[0];
                    // final check to make sure time off didn't get extended
                    if (offline[user] <= Number(e[1])) {
                       console.log('user', user, 'is back online by', e[1]);
                       online.add(user); 
                    } 
                }
                // increment mentions of all online users at current timestamp
                for(let user of online) {
                    console.log('mentioning', user);
                    mentions[Number(user)]++;
                }
            } else {
                e[2].split(' ').forEach((id) => {
                    // format: `id${id}`
                    console.log('mentioning', id);
                    mentions[Number(id.slice(2))]++;
                });
            }
        } else {
        // if OFFLINE
            // user is offline at timestamp and back online at timestamp + 60
            stack.push([Number(e[2]), Number(e[1]) + 60]);
            console.log('online users before', online);
            online.delete(Number(e[2]));
            console.log('online users after', online);
            console.log('making', e[2], 'go OFFLINE until', Number(e[1]) + 60);
            offline[e[2]] = Number(e[1]) + 60;
        }
        console.log('**********');
    }
    // return mentions
    return mentions;
};