/*
Number of Islands (Medium)
This problem tests your ability to traverse a 2D grid (a type of graph) and count connected components using BFS.

Problem Statement:
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are surrounded by water.

Example:
Input:
grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
Explanation: There are three islands in the grid.

Explanation Steps:
- We’ll iterate through each cell in the grid.
- When we encounter a '1', we’ll start a BFS to explore all connected '1's (the island) and mark them as visited (e.g., by changing them to '0').
- Each BFS call corresponds to one island, so we’ll increment the island count.
*/

function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    // Directions for moving to adjacent cells (up, down, left, right)
    const directions = [
        [-1, 0], // Up
        [1, 0],  // Down
        [0, -1], // Left
        [0, 1]   // Right
    ];

    // BFS function to explore the island
    function bfs(r, c) {
        const queue = [[r, c]]; // Initialize the queue with the starting cell
        grid[r][c] = "0"; // Mark the cell as visited

        while (queue.length > 0) {
            const [row, col] = queue.shift(); // Dequeue the current cell

            // Explore all four directions
            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // Check if the new cell is within bounds and is part of the island
                if (
                    newRow >= 0 && newRow < rows &&
                    newCol >= 0 && newCol < cols &&
                    grid[newRow][newCol] === "1"
                ) {
                    queue.push([newRow, newCol]); // Enqueue the new cell
                    grid[newRow][newCol] = "0"; // Mark the cell as visited
                }
            }
        }
    }

    // Iterate through the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                islandCount++; // Found a new island
                bfs(r, c); // Explore the island using BFS
            }
        }
    }

    return islandCount;
}

// Example usage:
const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(numIslands(grid)); // Output: 3

// Time Complexity: O(m * n) – We visit each cell in the grid once.

// Space Complexity: O(min(m, n)) – The queue can grow up to the minimum of the grid’s dimensions in the worst case.

// Data Structure Used: Queue (for BFS).

// Algorithm Used: Breadth-first search (BFS).

// Technique Used: Graph traversal and connected components.