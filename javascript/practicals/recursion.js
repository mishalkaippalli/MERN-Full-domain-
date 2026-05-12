// Sum of odd numbers in an array using recursion
// let arr = [1,2,3,4,5,6,7];

// function sumodd(arr){
//     if(arr.length === 0){
//         return 0
//     }
//     if(arr[0] % 2 !== 0){
//       return arr[0] + sumodd(arr.slice(1))
//     } else {
//       return sumodd(arr.slice(1))
//     }
   
// }
// console.log(sumodd(arr))

// //print fibonacci
// function fib(n){
    
//     if(n==1) return [0];
//     if(n==2) return [0,1]
    
//     let arr=fib(n-1)
    
//     arr.push(arr[arr.length-1]+arr[arr.length-2])
    
//     return arr
// }

// console.log(fib(4))

// function fibonnacci(n){
//     if(n === 0) return 0;
//     if(n === 1) return 1;

//     return fibonnacci(n-1) + fibonnacci(n-2)
// }
// console.log(fibonnacci(5))

// //print fibonnacci series
// function printSeries(n){
//    for(let i = 0; i < n; i++){
//     console.log(fibonnacci(i))
//    }
// }
// printSeries(5)

// function individualSum(n){
//    if(n < 10) return n;
   
//    let enddigit = n % 10;
//    n = Math.floor(n / 10);
//    return enddigit + individualSum(n)
// }
// console.log(individualSum(55567))


// function numberReverse(n, reversed = 0){
//    if(n === 0) return reversed;

//    let digit = n % 10;
//    reversed = reversed * 10 + digit;
//    n = Math.floor(n/10)
//    return numberReverse(n, reversed)
// }
// console.log(numberReverse(12345))
