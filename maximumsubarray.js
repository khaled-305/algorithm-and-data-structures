/*
Maximum Subarray (Easy)

This problem tests your ability to work with arrays and optimize solutions using the Kadane's Algorithm.

Problem Statement:
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:
Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: 6
Explanation: The subarray [4, -1, 2, 1] has the largest sum = 6.

Explanation:
- We’ll iterate through the array and keep track of two variables:
   - currentSum: The sum of the current subarray.
   - maxSum: The maximum sum found so far.

- At each step, we’ll decide whether to extend the current subarray or start a new subarray from the current element.
*/

function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // Decide whether to extend the current subarray or start a new one
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        // Update the maximum sum if the current subarray sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6

// Time Complexity: O(n) – We traverse the array once.

// Space Complexity: O(1) – We use only a few variables.

// Algorithm Used: Kadane's Algorithm.

// Sliding Window Concept: This problem introduces the idea of maintaining a "window" of elements (the current subarray) and sliding it through the array.