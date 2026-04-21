/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    /*
    sort
    0, 1, 3, 5, 6
    max: num papers (5)
    min: 0
    brute force: loop through citations times, checking if each citation is the h index
    h index is not necessarily citations[i] for some i
    ex: 3, 3 would have h index of 2
    start from 1 because 0 is always true
    ignore 0 citations -> start from 1
    1 citation with 1 citation? 1, true
    2 citations with 2 citations? 3 and 5, true
    3 citations with 3 citations? 3, 5, 6, true
    4 citations with 4 citations? 5, 6, END, false
    return 3
    */
    citations = citations.sort((a,b) => a - b);
    // console.log('citations', citations);
    for (let i = 0; i <= citations.length; i++) {
        // console.log('considering h index of', i);
        for (let j = citations.length - 1; citations.length - j <= i; j--) {
            // console.log('citations[j]', citations[j]);
            if (citations[j] < i) {
                // console.log('there are NOT at least', i, 'papers with', i, 'citations');
                return i - 1;
            }
        }
    }
    return citations.length;
};