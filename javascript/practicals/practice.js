// Given an array of student objects (e.g., { name: "John", score: 85, class: "A" }), 
// write a function to find the student with the highest score.

// const arr = [{ name: "John", score: 85, class: "A" },{ name: "Jo", score: 95, class: "B" }]
// const highestStudent = arr.reduce((acc, curr) => {
//     return (curr.score > acc.score) ? curr : acc;
// }, arr[0])

// console.log(highestStudent)

// You are given an array of integers. Write a function
//  to remove all duplicate even numbers from the array while
//   keeping the odd numbers and the first occurrence of each even number intact.

// Example: [1, 2, 4, 2, 6, 4, 5] -> [1, 2, 4, 6, 5]

// function removeDuplicates(arr){
//     let seenEven = new Set();
//     return arr.filter((n) => {
//         if(n % 2 ===0){
//             if(seenEven.has(n)){
//                 return false
//             } else {
//                 seenEven.add(n)
//             } 
//         }
//         return true
//     })
// }
// let arr = [1, 2, 4, 4, 5, 2, 6, 4, 5, 1]
// console.log(removeDuplicates(arr));

