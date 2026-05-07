// Sum of odd numbers in an array using recursion
let arr = [1,2,3,4,5,6,7];

function sumodd(arr){
    if(arr.length === 0){
        return 0
    }
    if(arr[0] % 2 !== 0){
      return arr[0] + sumodd(arr.slice(1))
    } else {
      return sumodd(arr.slice(1))
    }
   
}
console.log(sumodd(arr))

//print fibonacci
function fib(n){
    
    if(n==1) return [0];
    if(n==2) return [0,1]
    
    let arr=fib(n-1)
    
    arr.push(arr[arr.length-1]+arr[arr.length-2])
    
    return arr
}

console.log(fib(4))