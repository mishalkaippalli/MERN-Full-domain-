// Given an array of student objects (e.g., { name: "John", score: 85, class: "A" }), 
// write a function to find the student with the highest score.

const { rejects } = require("node:assert");
const { resolve } = require("node:dns");
const { get } = require("node:http");
const { json } = require("node:stream/consumers");
const { todo } = require("node:test");
const { callbackify } = require("node:util");

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


// Question 1: Array Manipulation
// Given an array of student objects, each having a name and a score,
//  write a JavaScript function to find and return the name of the student with the highest score.

// JavaScript
// const students = [
//   { name: "Alice", score: 85 },
//   { name: "Bob", score: 92 },
//   { name: "Charlie", score: 88 }
// ];
// // console.log(students[1].score)
// const highestStudent = students.reduce((acc, curr) => {
//    return curr.score > acc.score ? curr : acc;
// })

// console.log(highestStudent)

// Question 2: Frequency Mapping
// Given an array of student objects where each object has a name and a \
// class (e.g., 'A', 'B', 'C'), write a function to return an object showing the count of students in each class.

// Example Input:

// JavaScript
// const students = [
//   { name: "Alice", class: "A" },
//   { name: "Bob", class: "B" },
//   { name: "Charlie", class: "A" },
//   { name: "David", class: "C" },
//   { name: "Eve", class: "B" }
// ];
// Expected Output:
// { A: 2, B: 2, C: 1 }
// const std = students.reduce((acc, curr) => {
//     if(acc[curr.class]){
//       acc[curr.class] += 1
//     } else {
//         acc[curr.class] = 1
//     }
//     return acc
// },{})
// console.log(std)

// Question 3: Array & Loops
// Write a function that takes an array of numbers and prints only the even numbers from that array in reverse order.

// Example Input:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// Expected Output (printed or returned):
// 8, 6, 4, 2 

// const evenarr = arr.reduceRight((acc, curr) => {
//     if(curr % 2 === 0){
//         acc.push(curr);
//     }
//     return acc;
// },[])
// console.log(evenarr)


// Question 5: Random Logic
// Write a JavaScript function to generate a 6-digit random OTP (One Time Password). 
// The result should always be a string of 6 digits.

// function genotp(){
//     const otp = Math.floor(100000 + (Math.random() * 900000))
//     return otp.toString()
// }
// console.log(genotp())


// Question 7: Array Reduction
// Write a function using the .reduce() method to find the sum of only the positive numbers in a mixed array.

// Example Input:
// const arr =  [1, -4, 12, 0, -3, 29, -150]

// Expected Output:
// 42 (Calculated as 1 + 12 + 29)

// const sumofpositive = arr.reduce((acc,curr) => {
//     if(curr > 0){
//        acc += curr
//     }
//     return acc
// },0)
// console.log(sumofpositive)

// Question 8: String Manipulation
// Write a function to remove all duplicate characters from a string.

// Example Input:
// const str = "programming"

// Expected Output:
// "progamin"

// function removeDuplicates(str){
//     const set = new Set;
//     let out = ""
//     for(let  i = 0; i < str.length; i++){
//         if(set.has(str[i])){
//             continue;
//         }else {
//             set.add(str[i])
//             out += `${str[i]}`
//         }
//     }
//     return out
// }
// console.log(removeDuplicates(str))

// Question 9: Promise Conversion
// You have a legacy function that uses a callback.
//  How would you convert this getData function so that it returns a Promise?

// The Legacy Code:

// JavaScript
// function getData(id, callback) {
//     return new Promise((resolve,reject)=>{
//        setTimeout(() => {
//     if (id) {
//       resolve(callback(null, { id: id, name: "Product " + id })) 
//     } else {
//       reject(callback("Error: No ID provided", null)) 
//     }
//   }, 1000);
    

//   })


// function getData(id, callback) {
//   setTimeout(() => {
//     if (id) {
//       callback(null, { id: id, name: "Product " + id });
//     } else {
//       callback("Error: No ID provided", null);
//     }
//   }, 1000);
// }

// function getDataPromise(id){
//   return new Promise((resolve, reject) => {
//      getData(id, (err, data) => {
//       if(err){
//         reject(err)
//       }
//       if(data){
//         resolve(data)
//       }
//      })
//   })
// }
// const getdata1 = getDataPromise(2)
// getdata1.then((data) => console.log(data))
// .catch((err) => console.log(err))

//writing in async await

// async function fetchdata(){
//   try {
//     const data = await getDataPromise(0)
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }
// fetchdata()


// Question 10: Deep Copy vs. Shallow Copy
// In your "domain pendings" file, the topic of structuredClone and "deep vs shallow copy" 
// is mentioned several times.

// Task: Write a function (or show the modern way) to create a Deep Copy of the following nested object.

// JavaScript
// const user = {
//   name: "Rahul",
//   address: {
//     city: "Kochi",
//     zip: 682021
//   },
//   skills: ["JS", "Node"]
// };
// The Goal: If I create a copy named userCopy and then run
//  userCopy.address.city = "Bangalore", the original user.address.city should still be "Kochi"

// const deepcopy = structuredClone(user)
// console.log(deepcopy)
// const deepcopyusingparse = JSON.parse(JSON.stringify(user))
// console.log(deepcopyusingparse);

// const obj = {
//   name: "Rahul",
//   regularFunc: function() {
//     console.log("Regular:", this.name);
//   },
//   arrowFunc: () => {
//     console.log("Arrow:", this.name);
//   }
// };

// obj.regularFunc();
// obj.arrowFunc();

// Question 12: Object Destructuring & Renaming
// From your list, Object Destructuring is a key practical topic.

// Task: Given the following object, use destructuring to extract the city and zip properties into two variables named location and postalCode.

// JavaScript
// const user = {
//   name: "Rahul",
//   address: {
//     city: "Kochi",
//     zip: 682021
//   }
// };
// How would you write that single line of destructuring code?

// const { address: { city: location, zip: postalCode } } = user;

// Question 13: Closures & Loops
// This is a classic "practical" question appearing in your pending list as "print 1-10 in gap of 1s each".

// Write a function that prints the numbers 1, 2, 3, 4, and 5 to the console, but with 
// a 1-second delay between each number.

// Example Output:
// (Wait 1s) -> 1
// (Wait another 1s) -> 2
// ...and so on.

// Challenge: How do you ensure the loop doesn't just print the number 6 five times?
//  (Think about the difference between var and let or using a closure).

// How would you write this code?

// function Timer(n){
//   let  i = 1;
//  const starttimer = setInterval(()=>{
//     console.log(i);
//     i++;
//     if(i > n){
//       clearInterval(starttimer)
//     }
//   },1000)
// }
// Timer(5)
//using for and setTimeout
// for(let i = 1; i <= 5; i++){

//     setTimeout(() => {

//         console.log(i);

//     }, i * 1000);

// }

// Question 14: Array Filtering & Logic
// From your "pendings" list, there's a task: "Remove duplicate even numbers from an array."

// Task: Write a function that takes an array of numbers and returns a 
// new array where all odd numbers are kept, but even numbers appear only once (duplicates removed).

// const arr =  [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

// Expected Output: [1, 2, 3, 4, 5, 6, 7];
// let seen = new Set;
// const removedEvenduplicates = arr.filter((n) => {
  
//   if(n % 2 === 1) return true
//   if(n% 2 === 0 && !seen.has(n)) {
//     seen.add(n);
//     return true;
//   }
//   return false
// });

// console.log(removedEvenduplicates)

// Question 15: Functional Programming (Currying)
// What is Currying in JavaScript, and can you write a simple function multiply(a)(b)(c)
//  that returns the product of all three numbers?

const curr =  (x) => (y) => z => x*y*z;
