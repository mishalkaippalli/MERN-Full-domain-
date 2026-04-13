function quickSort(arr){
    if(arr.length <= 1){
        return arr
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let  i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    console.log("left array", left);
    console.log("right array", right)
    return [...quickSort(left),pivot,...quickSort(right)]
}
const arr = [2,6,1,9,3,4]
console.log(quickSort(arr))