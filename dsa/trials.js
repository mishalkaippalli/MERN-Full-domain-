//
function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > numberToInsert){
            arr[j+1] = arr[j];
            j--



            
        }
        arr[j+1] = numberToInsert
    }
    console.log(arr)
}
let arr = [3,2,5,7,8,1,-1,5,93];
insertionSort(arr)

