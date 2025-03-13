/*
Climbing Stairs (Easy)
This problem tests your ability to use dynamic programming to solve a problem with overlapping subproblems.

Problem Statement:
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Explanation:
- The number of ways to reach the nth step is the sum of the ways to reach the (n-1)th step and the (n-2)th step.

- This is because you can take either 1 step or 2 steps at a time.

- We’ll use an array dp to store the number of ways to reach each step.

*/

function climbStairs(n) {
    if (n === 1) return 1; // Base case

    const dp = new Array(n + 1).fill(0); // Create a DP array
    dp[1] = 1; // There's 1 way to reach the 1st step
    dp[2] = 2; // There are 2 ways to reach the 2nd step

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]; // Recurrence relation
    }

    return dp[n]; // Return the number of ways to reach the nth step
}

// Example usage:
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8

function climbStairs(n) {
    if (n === 1) return 1; // Base case

    let prev1 = 1; // Ways to reach the 1st step
    let prev2 = 2; // Ways to reach the 2nd step

    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2; // Calculate current step
        prev1 = prev2; // Update prev1
        prev2 = current; // Update prev2
    }

    return prev2; // Return the number of ways to reach the nth step
}

// Example usage:
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(5)); // Output: 8

// Time Complexity: O(n) – We compute the result for each step once.

// Space Complexity: O(n) for the DP array, or O(1) for the optimized version.

// Algorithm Used: Dynamic programming.

// Technique Used: Breaking the problem into smaller subproblems and storing results.