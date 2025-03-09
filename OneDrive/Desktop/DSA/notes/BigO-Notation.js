// Big O Notation Explained
// What is Big O Notation?
// Big O notation is a mathematical concept used to describe the efficiency of an algorithm in terms of time and space complexity as the input size (n) grows.

// 💡 Why is it important?

// Helps compare algorithms based on their performance.
// Determines how well an algorithm scales.
// Used in coding interviews and competitive programming.
// 1️⃣ Types of Complexities in Big O
// Big O notation primarily focuses on:

// Time Complexity ⏳ – How fast does the algorithm run?
// Space Complexity 💾 – How much memory does the algorithm use?
// 2️⃣ Common Big O Complexities
// Big O	Name	Meaning
// O(1)	Constant Time	Stays the same regardless of input size
// O(log n)	Logarithmic Time	Reduces problem size each step (Binary Search)
// O(n)	Linear Time	Grows proportionally with input size
// O(n log n)	Linearithmic Time	Efficient sorting (Merge Sort, Quick Sort)
// O(n²)	Quadratic Time	Nested loops (Bubble Sort)
// O(2ⁿ)	Exponential Time	Doubles at each step (Recursion-heavy problems)
// O(n!)	Factorial Time	Extremely slow (Traveling Salesman Problem)
// 3️⃣ Examples of Each Big O Complexity
// 🔹 O(1) – Constant Time
// Does not depend on input size (n).

// js
// Copy
// Edit
// function getFirstElement(arr) {
//     return arr[0];  // Always takes the same time
// }
// ✅ Fastest Complexity – Even if the array has 1M elements, it still takes the same time.

// 🔹 O(log n) – Logarithmic Time
// Reduces the problem size in each step (Binary Search).

// js
// Copy
// Edit
// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
//         if (arr[mid] === target) return mid;
//         else if (arr[mid] < target) left = mid + 1;
//         else right = mid - 1;
//     }
//     return -1;
// }
// ✅ Efficient for large datasets (e.g., Searching in 1 billion elements takes only ~30 steps).

// 🔹 O(n) – Linear Time
// Time grows directly with input size.

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
// ✅ Common for loops – If n = 1000, it runs 1000 times.

// 🔹 O(n log n) – Linearithmic Time
// Used in efficient sorting algorithms like Merge Sort & Quick Sort.

// js
// Copy
// Edit
// function mergeSort(arr) {
//     if (arr.length < 2) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// ✅ Much faster than O(n²) for large inputs.

// 🔹 O(n²) – Quadratic Time
// Nested loops → Performance drops significantly as input grows.

// js
// Copy
// Edit
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }
// ❌ Bad for large inputs – If n = 1000, it runs 1M (1000²) times.

// 🔹 O(2ⁿ) – Exponential Time
// Every call branches into multiple calls (Recursion-heavy).

// js
// Copy
// Edit
// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// ❌ Very slow for large values of n – Even for n = 50, it takes too long.

// 🔹 O(n!) – Factorial Time
// Extreme growth – Worst possible complexity.

// js
// Copy
// Edit
// function permutations(str, prefix = "") {
//     if (str.length === 0) console.log(prefix);
//     for (let i = 0; i < str.length; i++) {
//         permutations(str.slice(0, i) + str.slice(i + 1), prefix + str[i]);
//     }
// }
// ❌ Unusable for large inputs – n = 10 → 3.6M operations.

// 4️⃣ Best to Worst Performance (Big O Ranking)
// ✅ Best (Fastest)

// O(1) → Constant
// O(log n) → Logarithmic
// O(n) → Linear
// O(n log n) → Linearithmic
// O(n²) → Quadratic
// O(2ⁿ) → Exponential
// O(n!) → Factorial
// ❌ Worst (Slowest)
// 5️⃣ How to Analyze Time Complexity?
// 1️⃣ Count the loops

// Single loop → O(n)
// Nested loop → O(n²)
// Binary Search (halving) → O(log n)
// 2️⃣ Ignore Constants

// O(2n) → O(n)
// O(500n) → O(n)
// 3️⃣ Drop Non-Dominant Terms

// O(n² + n) → O(n²)
// O(n log n + n) → O(n log n)
// 6️⃣ Practical Tips
// ✅ Use Hash Tables (O(1) lookup) for fast searches
// ✅ Use Sorting (O(n log n)) before Binary Search (O(log n))
// ✅ Avoid nested loops where possible (O(n²) is bad!)
// ✅ Use Recursion wisely to avoid O(2ⁿ) complexity

// Conclusion
// Big O helps us write efficient code! 🚀
// 🔹 O(1), O(log n), O(n), O(n log n) are good.
// 🔹 O(n²), O(2ⁿ), O(n!) should be avoided for large inputs.

// Got it? ✅ Now go optimize your algorithms! 🔥