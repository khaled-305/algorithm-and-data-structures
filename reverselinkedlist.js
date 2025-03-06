/*
Reverse a Linked List (Easy)

This problem will help you understand how to work with linked lists and pointers (references in JavaScript).

Problem Statement:
Given the head of a singly linked list, reverse the list and return the new head.

Example:
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 5 -> 4 -> 3 -> 2 -> 1 -> null

Explanation:
- We’ll iterate through the linked list and reverse the direction of the next pointers.

At each step:

- Store the next node temporarily.

- Reverse the current node’s next pointer to point to the previous node.

- Move the previous and current pointers forward.
*/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let previous = null;
  let current = head;

  while (current !== null) {
    const next = current.next; // Store the next node
    current.next = previous; // Reverse the current node's pointer
    previous = current; // Move previous to current
    current = next; // Move current to next
  }

  return previous; // Previous will be the new head
}

// Helper function to create a linked list from an array (for testing)
function createList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Helper function to print a linked list (for testing)
function printList(head) {
  let result = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result.join(" -> "));
}

// Example usage:
const head = createList([1, 2, 3, 4, 5]);
console.log("Original List:");
printList(head); // Output: 1 -> 2 -> 3 -> 4 -> 5

const reversedHead = reverseList(head);
console.log("Reversed List:");
printList(reversedHead); // Output: 5 -> 4 -> 3 -> 2 -> 1


// Time Complexity: O(n) – We traverse the linked list once.

// Space Complexity: O(1) – We use only a few pointers.

// Data Structure Used: Singly linked list.

// Technique Used: Pointer manipulation.