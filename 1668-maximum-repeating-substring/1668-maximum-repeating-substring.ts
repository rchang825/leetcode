function maxRepeating(sequence: string, word: string): number {
    // curr count
    let currCount: number = 0;
    // max count
    let maxCount: number = 0;
    // pointer to place in sequence
    let seqP: number = 0;
    // pointer to place in word
    let wordP: number = 0;
    const l = word.length;
    const seqL = sequence.length
    let start: number = 0;
    // iterate until end of word
    while (seqP < seqL) {
        // if found matching first char to word
        if (sequence[seqP] === word[0]) {
            // set start
            start = seqP;
            // reset word pointer
            wordP = 0;
            // iterate until no more matches
            // console.log('first letter match found!');
            while (seqP < seqL && sequence[seqP] === word[wordP]) {
                // console.log(word[wordP], 'matches', sequence[seqP]);
                wordP++;
                seqP++;
                // if full sequence is completed, increment currCount
                // wrap wordP when needed
                if (wordP === l) {
                    wordP = 0;
                    // increment count
                    // console.log('at', seqP, 'a new iteration found');
                    currCount++;
                }
                // console.log('next: does', word[wordP], 'match', sequence[seqP], '?');
            }
            // update maxCount
            maxCount = Math.max(maxCount, currCount);
            // reset seqP to start + currCount * l

            seqP = start;
            // reset currCount
            currCount = 0;
        } 
        seqP++;
    }
    // return maxCount
    return maxCount;
};