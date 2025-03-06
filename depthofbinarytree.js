/*
Maximum Depth of Binary Tree (Easy)

This problem will help you understand how to work with binary trees and recursion.

Problem Statement:
Given the root of a binary tree, return its maximum depth.
The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example:
Input:
    3
   / \
  9  20
    /  \
   15   7

Output: 3
Explanation: The longest path is 3 -> 20 -> 15 or 3 -> 20 -> 7, so the depth is 3.

Explanation:
- The depth of a binary tree is the maximum depth of its left and right subtrees plus 1 (for the root node).

- We’ll use a recursive approach to calculate the depth of each subtree and return the maximum depth.
*/

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxDepth(root) {
  if (root === null) {
    return 0; // Base case: an empty tree has depth 0
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  // Return the maximum depth of the two subtrees plus 1 (for the root node)
  return Math.max(leftDepth, rightDepth) + 1;
}

// Helper function to create a binary tree from an array (for testing)
function createTree(arr, index = 0) {
  if (index >= arr.length || arr[index] === null) {
    return null;
  }
  const root = new TreeNode(arr[index]);
  root.left = createTree(arr, 2 * index + 1); // Left child
  root.right = createTree(arr, 2 * index + 2); // Right child
  return root;
}

// Example usage:
const root = createTree([3, 9, 20, null, null, 15, 7]);
console.log(maxDepth(root)); // Output: 3

// Time Complexity: O(n) – We visit each node once.

// Space Complexity: O(h) – Where h is the height of the tree (due to recursion stack).

// Data Structure Used: Binary tree.

// Technique Used: Recursion.
