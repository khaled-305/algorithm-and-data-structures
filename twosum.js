/*
Two Sum (Easy)

This is a classic problem that tests your understanding of arrays and hash maps.

Problem Statement:
Given an array of integers nums and an integer target, return the indices of the two numbers such that they add up to the target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example:
Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: nums[0] + nums[1] = 2 + 7 = 9, so the indices are [0, 1].

NB: In javascript, hash map are object in JavaScript.

Explanation:
* We’ll iterate through the array and for each number, check if the complement (i.e., target - current number) exists in the hash map.

* If it does, we’ve found our two numbers. If not, we’ll add the current number and its index to the hash map.

*/

function twoSum(nums, target) {
    const map = new Map(); // Create a hash map to store numbers and their indices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Calculate the complement

        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices if complement exists
        }

        map.set(nums[i], i); // Add the current number and its index to the map
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]


// Time Complexity: O(n) – We traverse the list once.

// Space Complexity: O(n) – We store numbers in a hash map.

// Data Structures Used: Hash map (JavaScript Map or object).