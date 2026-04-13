function multiply(x,y){
    return x * y
};
function curried(x){
    return function(y) {
        return x * y;
    }
}
const double = curried(2)
const trible = curried(3)

console.log(double(10))
console.log(trible(30))