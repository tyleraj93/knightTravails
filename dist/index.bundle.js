(self["webpackChunkknighttravails"] = self["webpackChunkknighttravails"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsZ0NBQWdDOztBQUVuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodHRyYXZhaWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogRmluZHMgdGhlIHNob3J0ZXN0IHBhdGggZm9yIGEga25pZ2h0IHRvIG1vdmUgZnJvbSBhIHN0YXJ0IHRvIGFuIGVuZCBwb2ludCBvbiBhIGNoZXNzYm9hcmQuXG4gKiBVc2VzIGFuIGl0ZXJhdGl2ZSBicmVhZHRoLWZpcnN0IHNlYXJjaCB0byBleHBsb3JlIGFsbCBwb3NzaWJsZSBwYXRocy5cbiAqIEBwYXJhbSB7QXJyYXl9IHN0YXJ0IC0gU3RhcnRpbmcgY29vcmRpbmF0ZXMgYXMgYSB0d28tZWxlbWVudCBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl9IGVuZCAtIEVuZGluZyBjb29yZGluYXRlcyBhcyBhIHR3by1lbGVtZW50IGFycmF5LlxuICogQHJldHVybnMge0FycmF5fSBUaGUgc2hvcnRlc3Qgcm91dGUgZnJvbSBzdGFydCB0byBlbmQgYXMgYW4gYXJyYXkgb2YgY29vcmRpbmF0ZXMuXG4gKi9cbmZ1bmN0aW9uIGtuaWdodE1vdmVzKHN0YXJ0LCBlbmQpIHtcbiAgICAvLyBEZWZpbmUgcG9zc2libGUga25pZ2h0IG1vdmVzIG9uIGEgY2hlc3Nib2FyZC5cbiAgICBjb25zdCBtb3ZlcyA9IFtcbiAgICAgICAgWzIsIDFdLFxuICAgICAgICBbMiwgLTFdLFxuICAgICAgICBbMSwgLTJdLFxuICAgICAgICBbLTEsIC0yXSxcbiAgICAgICAgWy0yLCAtMV0sXG4gICAgICAgIFstMiwgMV0sXG4gICAgICAgIFstMSwgMl0sXG4gICAgICAgIFsxLCAyXSxcbiAgICBdO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgcXVldWUgd2l0aCB0aGUgc3RhcnQgcG9zaXRpb24gYW5kIGl0cyBwYXRoLlxuICAgIGxldCBxdWV1ZSA9IFt7IHBvc2l0aW9uOiBzdGFydCwgcGF0aDogW3N0YXJ0XSB9XTtcblxuICAgIC8vIFRyYWNrIHZpc2l0ZWQgcG9zaXRpb25zIHRvIGF2b2lkIHJldmlzaXRpbmcgdGhlbS5cbiAgICBsZXQgdmlzaXRlZCA9IG5ldyBTZXQoW3N0YXJ0LnRvU3RyaW5nKCldKTtcblxuICAgIC8vIFByb2Nlc3MgZWFjaCBwb3NpdGlvbiB1bnRpbCB0aGUgcXVldWUgaXMgZW1wdHkuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xuXG4gICAgICAgIC8vIEV4cGxvcmUgYWxsIHBvdGVudGlhbCBtb3ZlcyBmcm9tIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgICAgICBmb3IgKGNvbnN0IG1vdmUgb2YgbW92ZXMpIHtcbiAgICAgICAgICAgIGxldCBuZXdYID0gY3VycmVudC5wb3NpdGlvblswXSArIG1vdmVbMF07XG4gICAgICAgICAgICBsZXQgbmV3WSA9IGN1cnJlbnQucG9zaXRpb25bMV0gKyBtb3ZlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gW25ld1gsIG5ld1ldO1xuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIHBhdGggaWYgdGhlIGVuZCBwb3NpdGlvbiBpcyByZWFjaGVkLlxuICAgICAgICAgICAgaWYgKG5ld1ggPT09IGVuZFswXSAmJiBuZXdZID09PSBlbmRbMV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWy4uLmN1cnJlbnQucGF0aCwgbmV3UG9zaXRpb25dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBZGQgdGhlIG5ldyBwb3NpdGlvbiB0byB0aGUgcXVldWUgaWYgaXQncyB2YWxpZCBhbmQgbm90IHZpc2l0ZWQuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgaXNPbkNoZXNzQm9hcmQobmV3WCkgJiZcbiAgICAgICAgICAgICAgICBpc09uQ2hlc3NCb2FyZChuZXdZKSAmJlxuICAgICAgICAgICAgICAgICF2aXNpdGVkLmhhcyhuZXdQb3NpdGlvbi50b1N0cmluZygpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdmlzaXRlZC5hZGQobmV3UG9zaXRpb24udG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBuZXdQb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogWy4uLmN1cnJlbnQucGF0aCwgbmV3UG9zaXRpb25dLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBEZXRlcm1pbmUgaWYgYSBudW1lcmljIHBvc2l0aW9uIGlzIHdpdGhpbiB0aGUgOHg4IGNoZXNzYm9hcmQuXG5mdW5jdGlvbiBpc09uQ2hlc3NCb2FyZChudW0pIHtcbiAgICByZXR1cm4gbnVtID49IDAgJiYgbnVtIDw9IDc7XG59XG5cbmNvbnNvbGUubG9nKGtuaWdodE1vdmVzKFszLCAzXSwgWzAsIDBdKSk7XG5jb25zb2xlLmxvZyhrbmlnaHRNb3ZlcyhbMCwgMF0sIFszLCAzXSkpO1xuY29uc29sZS5sb2coa25pZ2h0TW92ZXMoWzAsIDBdLCBbNywgN10pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==