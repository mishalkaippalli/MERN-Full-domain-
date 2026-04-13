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