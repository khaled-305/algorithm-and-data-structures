/*
Contains Duplicate (Easy)

This problem tests your ability to use hash maps to efficiently check for duplicates in an array.

Problem Statement:
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example:
Input: nums = [1, 2, 3, 1]
Output: true
Explanation: The number 1 appears twice in the array.

Explanation:
- We’ll iterate through the array and use a Set to store the elements we’ve seen.

- If we encounter an element that already exists in the Set, it means the array contains duplicates.

- If we finish the iteration without finding any duplicates, the array has all unique elements.

*/

function containsDuplicate(nums) {
  const seen = new Set(); // Create a Set to track seen elements

  for (const num of nums) {
    if (seen.has(num)) {
      return true; // Duplicate found
    }
    seen.add(num); // Add the current element to the Set
  }

  return false; // No duplicates found
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false

// Time Complexity: O(n) – We traverse the array once.

// Space Complexity: O(n) 

// Data Structure Used: Hash map (implemented as a Set in JavaScript).

// Technique Used: Tracking elements using a hash map.