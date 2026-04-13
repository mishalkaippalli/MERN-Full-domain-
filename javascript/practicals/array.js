// nth largest Element in an array

let arr = [2,6,2,1,8,6,10,1,1,7];
let n = 3
let mySet = new Set(arr);
let unique = [...mySet];
let sorted = unique.sort((a,b) => (b-a))
console.log(sorted[n-1])