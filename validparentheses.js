/*
Valid Parentheses (Easy)

This problem tests your ability to use stacks to validate the structure of nested parentheses.

Problem Statement:
Given a string (s) containing just the characters (, ), {, }, [, and ], determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.

Example:
Input: s = "()[]{}"
Output: true
Explanation: The string contains valid nested parentheses.

Explanation:
- We’ll use a stack to store opening brackets as we encounter them.
- For every closing bracket, we’ll check if it matches the top element of the stack.
- If the stack is empty or the brackets don’t match, the string is invalid.
- If the stack is empty at the end, the string is valid.

*/

function isValid(s) {
    const stack = [];
    const bracketPairs = {
        ")": "(",
        "}": "{",
        "]": "["
    };

    for (const char of s) {
        if (["(", "{", "["].includes(char)) {
            stack.push(char); // Push opening brackets onto the stack
        } else {
            const top = stack.pop(); // Pop the top element from the stack
            if (top !== bracketPairs[char]) {
                return false; // Mismatched brackets
            }
        }
    }

    return stack.length === 0; // If the stack is empty, the string is valid
}

// Example usage:
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("([)]"));   // Output: false


// Time Complexity: O(n) – We traverse the string once.
// Space Complexity: O(n) – In the worst case, the stack could store all opening brackets.
// Data Structure Used: Stack.
// Technique Used: Stack-based validation of nested structures.