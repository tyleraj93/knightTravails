/**
 * Finds the shortest path for a knight to move from a start to an end point on a chessboard.
 * Uses an iterative breadth-first search to explore all possible paths.
 * @param {Array} start - Starting coordinates as a two-element array.
 * @param {Array} end - Ending coordinates as a two-element array.
 * @returns {Array} The shortest route from start to end as an array of coordinates.
 */
function knightMoves(start, end) {
    // Define possible knight moves on a chessboard.
    const moves = [
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
    ];

    // Initialize the queue with the start position and its path.
    let queue = [{ position: start, path: [start] }];

    // Track visited positions to avoid revisiting them.
    let visited = new Set([start.toString()]);

    // Process each position until the queue is empty.
    while (queue.length > 0) {
        let current = queue.shift();

        // Explore all potential moves from the current position.
        for (const move of moves) {
            let newX = current.position[0] + move[0];
            let newY = current.position[1] + move[1];
            let newPosition = [newX, newY];

            // Return the path if the end position is reached.
            if (newX === end[0] && newY === end[1]) {
                return [...current.path, newPosition];
            }

            // Add the new position to the queue if it's valid and not visited.
            if (
                isOnChessBoard(newX) &&
                isOnChessBoard(newY) &&
                !visited.has(newPosition.toString())
            ) {
                visited.add(newPosition.toString());
                queue.push({
                    position: newPosition,
                    path: [...current.path, newPosition],
                });
            }
        }
    }
}

// Determine if a numeric position is within the 8x8 chessboard.
function isOnChessBoard(num) {
    return num >= 0 && num <= 7;
}

console.log(knightMoves([3, 3], [0, 0]));
console.log(knightMoves([0, 0], [3, 3]));
console.log(knightMoves([0, 0], [7, 7]));
