function divisorGame(n: number): boolean {
    // base case: n = 1
        // no valid moves
        // return false
    // base case: n = 2
        // Alice has one valid move: 1, and once she moves, n = 2 - x = 1, Bob cannot move
        // return true
    // n = 3
        // Alice has one valid move: 1, and once she moves, n = 3 - x = 2
        // Bob's turn, return opposite of f(2)
        // return false
    // n = 4
        // Alice has two valid moves: 1 or 2, and once she moves, n = 4 - x = 3 or 2
        // Bob's turn, return opposite of f(3) or opposite of f(2)
        // return true
    // n = 5
        // Alice has one valid move: 1, and once she moves, n = 5 - x = 4
        // Bob's turn, return opposite of f(4)
        // return false
    if (n === 1) {
        return false;
    }
    if (n === 2) {
        return true;
    }
    // always can choose x = 1
    // check if can choose x = 2
    if (n % 2 === 0) {
        return (!divisorGame(n - 1) || !divisorGame(n - 2));
    }
    return !divisorGame(n - 1);
};