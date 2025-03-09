// Data Structure and Algorithm (DSA) Explained
// Data Structure (DS):
// A data structure is a way of organizing and storing data so that it can be accessed and modified efficiently.

// Algorithm (Algo):
// An algorithm is a step-by-step procedure or set of rules for solving a problem or performing a computation.

// 1️⃣ Data Structures
// Data structures are classified into two main types:

// A. Linear Data Structures
// Elements are arranged in a sequence.

// Array

// Fixed-size collection of elements.
// Example: [10, 20, 30, 40]
// Operations: Insert, Delete, Access, Search.
// Time Complexity:
// Access: O(1)
// Search: O(n) (linear search), O(log n) (binary search)
// Linked List

// Each element (node) contains data and a reference (pointer) to the next node.
// Types: Singly, Doubly, Circular.
// Operations: Insert, Delete, Traverse.
// Time Complexity:
// Insert/Delete at the beginning: O(1)
// Search: O(n)
// Stack (LIFO – Last In, First Out)

// Operations: push(), pop(), peek()
// Example: Undo feature in a text editor
// Time Complexity: O(1) for push & pop
// Queue (FIFO – First In, First Out)

// Operations: enqueue(), dequeue(), front(), rear()
// Variants: Circular Queue, Priority Queue, Deque.
// Example: Task scheduling in OS
// Time Complexity: O(1) for enqueue & dequeue
// B. Non-Linear Data Structures
// Elements are not arranged sequentially.

// Tree

// Hierarchical data structure with nodes and edges.
// Types:
// Binary Tree (Each node has ≤ 2 children)
// Binary Search Tree (BST) (Left < Root < Right)
// Heap (Min-Heap, Max-Heap)
// Example: File system, HTML DOM
// Time Complexity:
// Insert/Search/Delete in BST: O(log n) (average), O(n) (worst)
// Graph

// A collection of nodes (vertices) connected by edges.
// Types: Directed, Undirected, Weighted, Unweighted.
// Example: Social networks, Google Maps
// Algorithms: BFS, DFS, Dijkstra’s Algorithm.
// Time Complexity:
// BFS & DFS: O(V + E)
// Dijkstra: O((V + E) log V)
// 2️⃣ Algorithms
// Algorithms solve problems using data structures efficiently.

// A. Searching Algorithms
// Linear Search - Check each element one by one. O(n)
// Binary Search - Works on sorted arrays, repeatedly divides the array in half. O(log n)
// B. Sorting Algorithms
// Bubble Sort - Repeatedly swaps adjacent elements. O(n²)
// Selection Sort - Finds the smallest element and swaps it. O(n²)
// Insertion Sort - Inserts elements in the correct position. O(n²)
// Merge Sort - Divide and merge. O(n log n)
// Quick Sort - Picks a pivot and partitions around it. O(n log n)
// Heap Sort - Uses a heap data structure. O(n log n)
// C. Recursion & Divide & Conquer
// Recursion: A function calls itself.
// Example: Factorial (n!) = n * factorial(n-1)
// Divide and Conquer: Break a problem into subproblems and solve them recursively.
// Example: Merge Sort, Quick Sort
// D. Graph Algorithms
// Breadth-First Search (BFS) - Level-wise traversal. O(V + E)
// Depth-First Search (DFS) - Goes deep before backtracking. O(V + E)
// Dijkstra’s Algorithm - Shortest path in weighted graphs. O((V + E) log V)
// Kruskal’s Algorithm - Minimum spanning tree. O(E log E)
// Prim’s Algorithm - Another MST algorithm. O((V + E) log V)
// 3️⃣ Why Learn Data Structures and Algorithms?
// Efficiency - Optimize performance.
// Problem-Solving - Helps in coding interviews.
// Scalability - Better handling of large-scale applications.
// 4️⃣ How to Learn DSA?
// ✔ Start with Arrays, Linked Lists, Stacks, Queues
// ✔ Practice Sorting & Searching Algorithms
// ✔ Learn Trees & Graphs
// ✔ Solve LeetCode, Codeforces, and HackerRank problems
// ✔ Implement in JavaScript, Python, C++, or Java

// 5️⃣ Example Problem: Find Maximum in an Array
// Using a Loop (O(n)):
// js
// Copy
// Edit
// function findMax(arr) {
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(findMax([3, 5, 7, 1, 9]));  // Output: 9
// // 💡 Mastering DSA = Faster, Efficient Code + Better Job Opportunities! 🚀