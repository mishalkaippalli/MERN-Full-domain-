// make a row*column array from an array from an array

let arr = [1, 2, 3, 4, 5, 6];
let result = [];
let rows = 3;
let column = 2;

for(let i = 0; i < rows; i++){
    let row = arr.slice(i * column, (i + 1) * column)
    result.push(row)
}
console.log(result)