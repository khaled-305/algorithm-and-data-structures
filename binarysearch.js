/*
Binary Search (Easy)
This problem tests your ability to implement binary search to find an element in a sorted array.

Problem Statement:
Given an array of integers nums sorted in ascending order and an integer target, write a function to search for target in nums. If target exists, return its index; otherwise, return -1.

Example:
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums, and its index is 4.

Explanation:
- Binary search works by repeatedly dividing the search interval in half.
- Start with two pointers, left and right, representing the current search interval.
- Calculate the middle index and compare the middle element with the target.
- If the middle element equals the target, return the index.
- If the middle element is less than the target, search the right half.
- If the middle element is greater than the target, search the left half.
- Repeat until the target is found or the search interval is empty.

*/

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2); // Calculate the middle index

    if (nums[mid] === target) {
      return mid; // Target found
    } else if (nums[mid] < target) {
      left = mid + 1; // Search the right half
    } else {
      right = mid - 1; // Search the left half
    }
  }

  return -1; // Target not found
}

// Example usage:
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Output: 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // Output: -1

// Time Complexity: O(log n) – The search interval is halved at each step.

// Space Complexity: O(1) – We use only a few variables.

// Algorithm Used: Binary search.

// Technique Used: Divide and conquer.
