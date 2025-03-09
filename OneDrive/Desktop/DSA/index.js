// const studentsDatabase  = ['jordan', 'erick', 'jhon', 'michel']

// const findStudent = (allStudents, studentName) => {
//     for(let i = 0; i < allStudents.length; i++) {
//         if(allStudents[i] === studentName) {
//             console.log(`Found ${studentName}`)
//         }
//     }
// }

// findStudent(studentsDatabase, 'jordan') // Found jordan

// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));


//     return merge(left, right);
// }

// function merge(left, right) {
//     let result = [], i = 0, j = 0;

//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }

//     return result.concat(left.slice(i)).concat(right.slice(j));
// }

// // Example usage
// const arr = [38, 27, 43, 3, 9, 82, 10];
// console.log([3, 9, 38, 27, 43].concat([38, 27, 43].concat([3, 9, 82, 10])))
// console.log(mergeSort(arr));
// // Output: [3, 9, 10, 27, 38, 43, 82]

// O(n^2) Quadatric time (nested loop) bubble sort
function findPairs(arr) {
    // O(n^2)
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`)
        }
    }

    // O(n)
    for(let q = 0; q < arr.length; q++) {
        console.log(`--------`,q)
    }

    // If we combine all the "O" operations it becomes O(n^2 + n) 
    // O(n^2) is a Dominant term
    // "n" is a Non-Dominant term
    // So we remove the "non-dominant" term and we're only left with O(n^2 + n)
    // This way, we simplify our bigO
}

const numbers = [1,2,3,4,5];

findPairs(numbers)