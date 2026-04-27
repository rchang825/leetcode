/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    /*
        /home/./user//Documents/../Pictures
        can split with forward slash??
        '',home,.,user,'',Documents,..,Pictures
        res = '/'
        iterate through elements adding to stack
        ignore empties (multiple slashes condense to single)
        ignore single period (indicates current directory)
        double period -> pop off top of stack and ignore
        not double period -> pop off top of stack and add to res
        
        '' -> ignore
        home -> add to stack
        '.' -> ignore
        user -> add to stack
        '' -> ignore
        Documents -> add to stack
        '..' -> pop off top
        Pictures -> add to stack
        EOI
        assemble res with stack
            res = 'home/user/Pictures'
        /home/user/Pictures
    */
    let els = path.split('/');
    // console.log(els);
    let res = '';
    let stk = [];
    let directory = '';
    for (let e of els) {
        if (e === '..') {
            stk.pop();
        } else if (e !== '' && e !== '.') {
            stk.push(e);
        }
    }

    return '/' + stk.join('/');
};
    